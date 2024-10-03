import { NextResponse } from 'next/server';
import { resend } from '../../../../lib/resend/resend';
import VerifyIdentityEmail from '../../../email_templates/verify_identity/verify-identity';

export async function GET(request: Request) {
  try {
    // Call your resend email function
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'timothywhitedevelopment@gmail.com',
      subject: 'Company Name | Waitlist',
      react: VerifyIdentityEmail({
        validationCode: '123456'
      })
    });

    // Return the response with a 200 status
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    // Handle errors and return a 500 status
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  return NextResponse.json(
    { message: 'Method POST Not Allowed' },
    { status: 405 }
  );
}

export async function PUT(request: Request) {
  return NextResponse.json(
    { message: 'Method PUT Not Allowed' },
    { status: 405 }
  );
}

export async function DELETE(request: Request) {
  return NextResponse.json(
    { message: 'Method DELETE Not Allowed' },
    { status: 405 }
  );
}
