/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/UKsC48eOxbB
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Cabin } from 'next/font/google'
import { Cabin } from 'next/font/google'

cabin({
  subsets: ['latin'],
  display: 'swap',
})

cabin({
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

export function YouTubeWatch() {
  return (
    (<div
      className="w-full px-4 mx-auto grid grid-rows-[auto_1fr_auto] gap-4 md:gap-6 pb-10">
      <header>
        <div className="mx-auto h-14 flex items-center gap-4">
          <Link className="flex gap-2 font-semibold items-center" href="#">
            <YoutubeIcon className="w-8 h-8 text-red-500" />
            YouTube
          </Link>
          <div className="flex-1">
            <form>
              <div className="relative">
                <Input className="rounded-full pl-10" placeholder="Search" type="search" />
                <SearchIcon
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </form>
          </div>
          <Button className="h-8 text-sm" variant="outline">
            Switch account
          </Button>
          <Button className="h-8 text-sm" variant="outline">
            Sign in
          </Button>
        </div>
      </header>
      <main className="grid md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-8 lg:col-span-9 xl:col-span-10 grid gap-4">
          <div className="grid gap-2">
            <div className="rounded-xl overflow-hidden">
              <span className="w-full aspect-video rounded-md bg-muted" />
            </div>
            <div className="py-2 grid gap-2">
              <h1 className="text-xl font-semibold line-clamp-3">
                Vercel Ship Keynote: Introducing the frontend cloud
              </h1>
              <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <img
                    alt="Thumbnail"
                    className="rounded-full object-cover aspect-square"
                    height={40}
                    src="/placeholder.svg"
                    width={40} />
                  <div className="text-sm">
                    <div className="font-semibold">Vercel</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">70K subscribers</div>
                  </div>
                </div>
                <div className="ml-auto space-y-1.5 text-sm">
                  <Button size="sm" variant="outline">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-sm dark:bg-gray-800">
              <p>
                Today, we're introducing the frontend cloud, where frontend developers build, test, and deploy
                high-quality web applications efficiently and quickly, all on Vercel.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <h2 className="font-semibold text-xl">Up next</h2>
            <div className="grid grid-cols-2 items-start gap-4">
              <Link className="space-y-2" href="#">
                <img
                  alt="Thumbnail"
                  className="aspect-video rounded-lg object-cover"
                  height={180}
                  src="/placeholder.svg"
                  width={320} />
                <div className="font-semibold line-clamp-2">Using Vercel KV with Svelte</div>
                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Lee Robinson</div>
                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">12K views · 10 days ago</div>
              </Link>
              <Link className="space-y-2" href="#">
                <img
                  alt="Thumbnail"
                  className="aspect-video rounded-lg object-cover"
                  height={180}
                  src="/placeholder.svg"
                  width={320} />
                <div className="font-semibold line-clamp-2">Using Vercel KV with Svelte</div>
                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Lee Robinson</div>
                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">12K views · 10 days ago</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-3 xl:col-span-2 grid gap-4">
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168} />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Introducing v0: Generative UI</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Vercel</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">300K views · 5 days ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168} />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Introducing the frontend cloud</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Vercel</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">1.2M views · 2 months ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168} />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Using Vercel KV with Svelte</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Lee Robinson</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">21K views · 1 week ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168} />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Loading UI with Next.js 13</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Delba</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">12K views · 10 days ago</div>
            </div>
          </div>
        </div>
      </main>
    </div>)
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


function YoutubeIcon(props) {
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
        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>)
  );
}
