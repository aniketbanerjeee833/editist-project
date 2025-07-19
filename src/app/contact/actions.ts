
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
  // You can now securely handle it, for example, by sending an email.
  // console.log('Validated data:', validatedFields.data);

  // Replace this with your actual email sending logic (e.g., using Resend, Nodemailer, etc.)
  // For demonstration, we'll just simulate a successful submission.
  
  return {
    success: true,
    message: "Thanks for reaching out. We'll get back to you shortly.",
  };
}
