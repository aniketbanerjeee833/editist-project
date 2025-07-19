
'use server';

import * as z from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from './email-template';
import { UserReplyEmail } from './user-reply-template';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;
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

  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY is not set. Skipping email sending.");
    console.log('Received new contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    return {
      success: true,
      message: "Thanks for reaching out! We'll get back to you shortly (Email sending is currently disabled).",
    };
  }
  
  if (!toEmail) {
    console.error("TO_EMAIL environment variable is not set.");
    return {
      success: false,
      message: "Sorry, the server is misconfigured. Please try again later.",
    };
  }

  try {
    // Send email to the site owner
    const ownerEmailPromise = resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New message from ${name}: ${subject}`,
      reply_to: email,
      react: ContactFormEmail({ name, email, message }),
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // Fallback for email clients that don't render HTML
    });

    // Send automated reply to the user
    const userEmailPromise = resend.emails.send({
        from: fromEmail,
        to: email, // Send to the user who filled the form
        subject: "We've received your message!",
        react: UserReplyEmail({ name }),
        text: `Hi ${name},\n\nThanks for reaching out! We've received your message and will get back to you as soon as possible.\n\nBest,\nThe Glitch Launch Team`
    });

    const [ownerEmailRes, userEmailRes] = await Promise.all([ownerEmailPromise, userEmailPromise]);

    if (ownerEmailRes.error) {
      console.error("Failed to send owner email with Resend:", ownerEmailRes.error);
      return {
        success: false,
        message: "Sorry, we couldn't send your message. Please try again later.",
      };
    }
    
    if (userEmailRes.error) {
        console.error("Failed to send user reply email with Resend:", userEmailRes.error);
        // Still return success to the user as their main message went through
    }

    return {
      success: true,
      message: "Thanks for reaching out. We'll get back to you shortly.",
    };

  } catch (error) {
    console.error("An unexpected error occurred while sending the email:", error);
    return {
      success: false,
      message: "Sorry, an unexpected error occurred. Please try again later.",
    };
  }
}
