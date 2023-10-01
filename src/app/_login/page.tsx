import Link from 'next/link';

import { Icon } from '@/components/Elements/Icon';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';

import Messages from './messages';

export default function Login() {
  return (
    <MaxWidthWrapper className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
        <Link
          className="group absolute left-8 top-8 flex items-center rounded-md px-4 py-2 text-sm text-foreground no-underline"
          href="/"
        >
          <Icon icon="chevronLeft" />
          Back
        </Link>

        <form
          action="/api/auth/sign-in"
          className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground"
          method="post"
        >
          <label className="flex flex-col" htmlFor="email">
            Email
            <input
              required
              className="mb-6 rounded-md border bg-inherit px-4 py-2"
              id="email"
              name="email"
              placeholder="you@example.com"
            />
          </label>
          <label className="flex flex-col" htmlFor="password">
            Password
            <input
              required
              className="mb-6 rounded-md border bg-inherit px-4 py-2"
              name="password"
              placeholder="••••••••"
              type="password"
            />
          </label>
          <button className="mb-2 rounded bg-green-700 px-4 py-2 text-white" type="submit">
            Sign In
          </button>
          <button
            className="mb-2 rounded border border-gray-700 px-4 py-2 text-black dark:text-white"
            formAction="/api/auth/sign-up"
            type="submit"
          >
            Sign Up
          </button>
          <Messages />
        </form>
      </div>
    </MaxWidthWrapper>
  );
}
