
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

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
    });

    if (!res.ok) {
        const errorData = await res.json();
        return {
            success: false,
            message: errorData.message || "Something went wrong on the server.",
        }
    }

    const responseData = await res.json();
    return {
      success: true,
      message: responseData.message,
    };
    
  } catch (error) {
    console.error("Failed to submit form:", error);
    return {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
    }
  }
}
