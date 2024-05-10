/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/bhT4iV4MbTH
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Archivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

archivo({
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

export function MainPage() {
  return (<>
    <header
      className="flex h-16 items-center justify-between bg-gray-900 px-4 md:px-6">
      <Link className="flex items-center gap-2 text-white" href="#">
        <TwitterIcon className="h-6 w-6" />
        <span className="font-bold">Twitter</span>
      </Link>
      <div className="relative w-full max-w-md">
        <SearchIcon
          className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <Input
          className="w-full rounded-full bg-gray-800 py-2 pl-10 pr-4 text-white focus:outline-none"
          placeholder="Search Twitter"
          type="text" />
      </div>
      <nav className="hidden gap-4 md:flex">
        <Link
          className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          href="#">
          Home
        </Link>
        <Link
          className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          href="#">
          Explore
        </Link>
        <Link
          className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          href="#">
          Notifications
        </Link>
        <Link
          className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          href="#">
          Messages
        </Link>
        <Link
          className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          href="#">
          Profile
        </Link>
      </nav>
      <Button className="hidden md:inline-flex" size="sm" variant="primary">
        Tweet
      </Button>
    </header>
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="hidden w-[300px] border-r border-gray-200 p-4 md:block">
        <div
          className="flex items-center gap-4 rounded-full bg-gray-100 p-2 hover:bg-gray-200">
          <img
            alt="User Avatar"
            className="rounded-full"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width={40} />
          <div>
            <h3 className="font-bold">John Doe</h3>
            <p className="text-gray-500">@johndoe</p>
          </div>
        </div>
        <nav className="mt-4 space-y-2">
          <Link
            className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            href="#">
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link
            className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            href="#">
            <HashIcon className="h-5 w-5" />
            Explore
          </Link>
          <Link
            className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            href="#">
            <BellIcon className="h-5 w-5" />
            Notifications
          </Link>
          <Link
            className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            href="#">
            <MailboxIcon className="h-5 w-5" />
            Messages
          </Link>
          <Link
            className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            href="#">
            <UserIcon className="h-5 w-5" />
            Profile
          </Link>
          <Link
            className="flex items-center gap-2 rounded-full px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            href="#">
            <PlusIcon className="h-5 w-5" />
            More
          </Link>
        </nav>
        <Button className="mt-4 w-full" variant="primary">
          Tweet
        </Button>
      </div>
      <div className="flex-1 border-r border-gray-200 p-4">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-bold">Home</h2>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <img
              alt="User Avatar"
              className="rounded-full"
              height={50}
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50} />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold">John Doe</h3>
                <p className="text-gray-500">@johndoe</p>
                <span className="text-gray-500">· 1h</span>
              </div>
              <p>This is a sample tweet with an image. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <img
                alt="Tweet Image"
                className="mt-2 rounded-lg"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width={500} />
            </div>
          </div>
          <div className="flex gap-4">
            <img
              alt="User Avatar"
              className="rounded-full"
              height={50}
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50} />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold">Jane Doe</h3>
                <p className="text-gray-500">@janedoe</p>
                <span className="text-gray-500">· 2h</span>
              </div>
              <p>This is another sample tweet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-[300px] border-l border-gray-200 p-4 md:block">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-bold">Trends for you</h2>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Trending in United States</p>
              <h3 className="font-bold">#TwitterTips</h3>
            </div>
            <PlusIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Trending in Technology</p>
              <h3 className="font-bold">#ArtificialIntelligence</h3>
            </div>
            <PlusIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Trending in Sports</p>
              <h3 className="font-bold">#WorldCup</h3>
            </div>
            <PlusIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>
        <div className="mt-4 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-bold">Who to follow</h2>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-4">
            <img
              alt="User Avatar"
              className="rounded-full"
              height={50}
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50} />
            <div className="flex-1">
              <h3 className="font-bold">Jane Doe</h3>
              <p className="text-gray-500">@janedoe</p>
            </div>
            <Button size="sm" variant="primary">
              Follow
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <img
              alt="User Avatar"
              className="rounded-full"
              height={50}
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50} />
            <div className="flex-1">
              <h3 className="font-bold">John Smith</h3>
              <p className="text-gray-500">@johnsmith</p>
            </div>
            <Button size="sm" variant="primary">
              Follow
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <img
              alt="User Avatar"
              className="rounded-full"
              height={50}
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50} />
            <div className="flex-1">
              <h3 className="font-bold">Emily Johnson</h3>
              <p className="text-gray-500">@emilyjohnson</p>
            </div>
            <Button size="sm" variant="primary">
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  </>);
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}


function HashIcon(props) {
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
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>)
  );
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function MailboxIcon(props) {
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
        d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>)
  );
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
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


function TwitterIcon(props) {
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
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
