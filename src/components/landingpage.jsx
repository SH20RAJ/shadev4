/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/BQRmW9DJsEj
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Cormorant_Garamond } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function landingpage() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <ShrinkIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Shade</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Feed
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Discover
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Messages
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Profile
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550" />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    All-in-One Social Media Platform
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover, connect, and share with Shade - the ultimate social media experience.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                    <Button type="submit">Sign Up</Button>
                  </form>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Join Shade and start connecting with friends and family.
                    <Link className="underline underline-offset-2" href="#">
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Discover, Connect, and Share
                </h2>
                <p
                  className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Shade offers a seamless social media experience with features to help you stay connected with friends,
                  family, and communities.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <RssIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <div>
                        <h3 className="text-lg font-semibold">News Feed</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Stay up-to-date with the latest posts from your connections.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <SearchIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <div>
                        <h3 className="text-lg font-semibold">Discover</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Explore new content, people, and communities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <MessagesSquareIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <div>
                        <h3 className="text-lg font-semibold">Messages</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with friends and family through private messaging.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <UserIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <div>
                        <h3 className="text-lg font-semibold">Profile</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Customize your profile and showcase your interests.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Community</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Connect with Like-Minded People
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Shade provides a vibrant community where you can connect with people who share your interests and
                  passions.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div
                  className="rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                  <div className="flex flex-col items-center gap-3">
                    <Avatar>
                      <AvatarImage alt="User" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                  <div className="flex flex-col items-center gap-3">
                    <Avatar>
                      <AvatarImage alt="User" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Jane Doe</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Designer</p>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                  <div className="flex flex-col items-center gap-3">
                    <Avatar>
                      <AvatarImage alt="User" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Sarah Miller</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Marketer</p>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                  <div className="flex flex-col items-center gap-3">
                    <Avatar>
                      <AvatarImage alt="User" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Michael Johnson</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Entrepreneur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Download</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get Shade on Your Device
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Download the Shade app on your mobile device and stay connected on the go.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#">
                  <AppleIcon className="mr-2 h-5 w-5" />
                  App Store
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#">
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Google Play
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Shade. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function AppleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>)
  );
}


function MessagesSquareIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    </svg>)
  );
}


function PlayIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>)
  );
}


function RssIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function ShrinkIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
      <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
      <path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
      <path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
