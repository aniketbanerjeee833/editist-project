
'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your entries.',
    };
  }

  // At this point, the data is validated on the server.
  // You can now securely handle it. The validated data is available in `validatedFields.data`.
  const { name, email, subject, message } = validatedFields.data;

  // =================================================================
  //  YOUR LOGIC GOES HERE
  // =================================================================
  // For example, you could send an email using a service like Resend or Nodemailer.
  //
  // Example with a logging statement:
  console.log('Received new contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);
  //
  // Example with a pseudo-email sending function:
  //
  // try {
  //   await sendEmail({
  //     from: 'your-email@yourdomain.com',
  //     to: 'your-receiving-email@yourdomain.com',
  //     subject: `New message from ${name}: ${subject}`,
  //     text: `From: ${name} <${email}>\n\n${message}`,
  //   });
  //
  //   return {
  //     success: true,
  //     message: "Thanks for reaching out. We'll get back to you shortly.",
  //   };
  //
  // } catch (error) {
  //   console.error("Failed to send email:", error);
  //   return {
  //     success: false,
  //     message: "Sorry, we couldn't send your message. Please try again later.",
  //   };
  // }
  // =================================================================
  
  // For demonstration, we'll just simulate a successful submission without sending an email.
  return {
    success: true,
    message: "Thanks for reaching out. We'll get back to you shortly.",
  };
}
