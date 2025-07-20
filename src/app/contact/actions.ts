
'use server';

import * as z from 'zod';
import { Resend } from 'resend';
import { UserReplyEmail } from './user-reply-template';
import clientPromise from '@/lib/mongodb';
import { headers } from 'next/headers';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = 'Contact Form <onboarding@resend.dev>'; // This must be a domain you've verified with Resend

async function saveToDatabase(data: z.infer<typeof formSchema>, metadata: Record<string, any>) {
    if (!process.env.MONGODB_URI || !process.env.MONGODB_DB) {
        console.log("MongoDB environment variables not set. Skipping database save.");
        return;
    }
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        const collection = db.collection('contacts');
        const result = await collection.insertOne({
            ...data,
            metadata,
            submittedAt: new Date(),
        });
        console.log(`Successfully inserted item with _id: ${result.insertedId}`);
    } catch (error) {
        console.error("Failed to save to database:", error);
        // We can re-throw the error or handle it gracefully
        throw new Error("Could not save the form submission.");
    }
}

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your entries.',
    };
  }
  
  const headersList = headers();
  const metadata = {
      ip: headersList.get('x-forwarded-for') ?? headersList.get('x-real-ip'),
      userAgent: headersList.get('user-agent'),
      referer: headersList.get('referer'),
      headers: Object.fromEntries(headersList.entries()),
  };

  const { name, email, subject, message } = validatedFields.data;

  try {
    // Save submission to MongoDB with metadata
    await saveToDatabase(validatedFields.data, metadata);
  } catch (dbError) {
      console.error("Database submission error:", dbError);
      return {
          success: false,
          message: "We couldn't save your message right now. Please try again later.",
      }
  }


  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY is not set. Skipping automated reply.");
    return {
      success: true,
      message: "Thanks for your message! You'll receive a confirmation shortly (Email sending is currently disabled).",
    };
  }

  try {
    // Send automated reply to the user
    await resend.emails.send({
        from: fromEmail,
        to: email, // Send to the user who filled the form
        subject: "We've received your message!",
        react: UserReplyEmail({ name }),
        text: `Hi ${name},\n\nThanks for reaching out! We've received your message and will get back to you as soon as possible.\n\nBest,\nThe Glitch Launch Team`
    });
    
    return {
      success: true,
      message: "Thanks for your message! A confirmation has been sent to your email.",
    };

  } catch (emailError) {
    console.error("An unexpected error occurred while sending the email:", emailError);
    // Even if email fails, the data is saved, so we might return a partial success message
    return {
      success: true, // Data was saved, so it's a success from user's perspective
      message: "Thanks for your message! We couldn't send a confirmation email, but we have received your submission.",
    };
  }
}
