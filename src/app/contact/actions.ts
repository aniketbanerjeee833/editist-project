
'use server';

import * as z from 'zod';
import { Resend } from 'resend';
import { UserReplyEmail } from './user-reply-template';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = 'Contact Form <onboarding@resend.dev>'; // This must be a domain you've verified with Resend

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your entries.',
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // Since we are not sending the email to the site owner anymore,
  // we can just log the form submission on the server for debugging or records.
  console.log('Received new contact form submission (not emailed to owner):');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);


  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY is not set. Skipping automated reply.");
    return {
      success: true,
      message: "Thanks for your message! You'll receive a confirmation shortly (Email sending is currently disabled).",
    };
  }

  try {
    // Send automated reply to the user
    const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: email, // Send to the user who filled the form
        subject: "We've received your message!",
        react: UserReplyEmail({ name }),
        text: `Hi ${name},\n\nThanks for reaching out! We've received your message and will get back to you as soon as possible.\n\nBest,\nThe Glitch Launch Team`
    });

    if (error) {
      console.error("Failed to send user reply email with Resend:", error);
      return {
        success: false,
        message: "Sorry, we couldn't send your confirmation email. Please try again later.",
      };
    }
    
    return {
      success: true,
      message: "Thanks for your message! A confirmation has been sent to your email.",
    };

  } catch (error) {
    console.error("An unexpected error occurred while sending the email:", error);
    return {
      success: false,
      message: "Sorry, an unexpected error occurred. Please try again later.",
    };
  }
}
