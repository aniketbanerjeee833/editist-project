
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // You can now process the form data here.
    // For example, log it to the console:
    console.log("Form data received:", body);

    // You could also send an email, save to a different database, etc.

    return NextResponse.json({ success: true, message: "Thanks for your message! We have received it." });

  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json({ success: false, message: "Server error while processing form." }, { status: 500 });
  }
}
