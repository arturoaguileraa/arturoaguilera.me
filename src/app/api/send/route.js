import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email, fromEmail],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>New message submitted from: {email}</p>
          <p>{message}</p>
        </>
      ),
    });
    console.log(data);
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
