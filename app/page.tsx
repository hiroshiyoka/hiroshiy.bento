// import { ThemeToggle } from '@/components/theme.toggle'
import { LuMapPin, LuMail } from "react-icons/lu";
import { ThemeToggle } from '@/components/theme.toggle'
import { siteConfig } from '@/config/site.config'
import Image from 'next/image'
import { Grid } from "lucide-react";

const GridItems = new Array(36).fill(0);


export default function Home() {
  return (
    <main className="flex flex-1 h-full w-full gap-10">

      <div className="flex-1 p-8 h-full max-w-md">
        <div className="flex flex-col h-full rounded-md space-y-6">
          <Image
            className="rounded-lg"
            alt="raka-fadilah"
            src="/about.jpg"
            width="115"
            height="115"
            priority
            loading="eager" 
          />

          <div>
            <div className="text-xl text-primary font-semibold">
              {siteConfig.title}
            </div>
            <div className="text-4xl font-bold mt-2">
              {siteConfig.creator}
            </div>
            <div className="text-2xl font-light text-neutral-500">
              {siteConfig.bio}
            </div>
          </div>

          <div className="flex items-center gap-6 justify-between text-sm">
            <a className="flex items-center border border-neutral-200 w-full gap-2 dark:border-neutral-800 py-2 px-3 rounded-md" href={siteConfig.locationLink}>
              <LuMapPin size="16" />
              {siteConfig.location}
            </a>
            <a className="flex items-center border border-neutral-200 w-full gap-2 dark:border-neutral-800 py-2 px-3 rounded-md" href={`mailto:${siteConfig.email}`}>
              <LuMail size="16" />
              Contact Me
            </a>
          </div>
          
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 text-xs flex items-center justify-between">
            <div className="text-neutral-500">
              Built by @hiroshiy | ©2023 hiroshiyoka. All Rights Reserved
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="flex-1 h-full">
        <div className="w-full h-full p-6 overflow-y-auto grid grid-cols-4 auto-rows-[76px] gap-10">
          {GridItems.map((item, index) => {
            return <div key={index} className="bg-emerald-100 rounded-md" /> 
          })}
        </div>
      </div>
    </main>
  )
}
