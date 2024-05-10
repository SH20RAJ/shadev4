/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/QUZaCVwwQ9w
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function chatappui() {
  return (
    (<div className="flex h-screen w-full max-w-[1200px] mx-auto">
      <div
        className="hidden lg:block w-[280px] bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <TextIcon className="h-6 w-6" />
              <span className="">Acme Chat</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                <UsersIcon className="h-4 w-4" />
                Contacts
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#">
                <MessageCircleIcon className="h-4 w-4" />
                Chats
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <header
          className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100 dark:bg-gray-800 px-6">
          <div className="flex-1">
            <div className="relative">
              <SearchIcon
                className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                placeholder="Search chats..."
                type="search" />
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 overflow-hidden">
          <div className="flex h-full">
            <div
              className="hidden w-[280px] border-r border-gray-200 dark:border-gray-700 lg:block">
              <div className="flex h-full flex-col">
                <div className="flex h-[60px] items-center border-b px-6">
                  <h3 className="text-lg font-semibold">Contacts</h3>
                </div>
                <div className="flex-1 overflow-auto">
                  <div className="grid gap-2 p-4">
                    <Link
                      className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                      href="#">
                      <Avatar>
                        <AvatarImage alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">Olivia Davis</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Hey, how's it going?</p>
                      </div>
                      <Badge className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50">2</Badge>
                    </Link>
                    <Link
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                      href="#">
                      <Avatar>
                        <AvatarImage alt="@shadcn" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Let's discuss the project.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div
                className="flex h-[60px] items-center border-b border-gray-200 dark:border-gray-700 px-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage alt="@shadcn" />
                    <AvatarFallback>OD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Olivia Davis</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-auto p-6">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage alt="@shadcn" />
                      <AvatarFallback>OD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
                        <p>Hey, how's it going?</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">10:30 AM</p>
                      </div>
                      <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
                        <p>I'm doing great, thanks for asking!</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">10:31 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-end">
                    <div className="flex-1 space-y-2">
                      <div className="rounded-lg bg-blue-500 p-3 text-sm text-white">
                        <p>That's great to hear! I wanted to ask if you're free for a call later today?</p>
                        <p className="text-xs text-gray-200">10:32 AM</p>
                      </div>
                    </div>
                    <Avatar>
                      <AvatarImage alt="@shadcn" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <form className="flex items-center gap-2">
                  <Input className="flex-1" placeholder="Type your message..." type="text" />
                  <Button type="submit">
                    <SendIcon className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>)
  );
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


function MessageCircleIcon(props) {
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
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


function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>)
  );
}


function SettingsIcon(props) {
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
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function TextIcon(props) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>)
  );
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
