import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get('email'));
  if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 });

  const requestUrl = new URL(request.url);
  const supabase = createRouteHandlerClient({ cookies });
  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    return NextResponse.redirect(`${requestUrl.origin}/login?error=${error.message}`, { status: 301 });
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/login?message=If there is an account associated with your email you will receive an email soon.`,
    {
      status: 301,
    },
  );
}
