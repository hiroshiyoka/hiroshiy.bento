// import { ThemeToggle } from '@/components/theme.toggle'
import { siteConfig } from '@/config/site.config'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-1 h-full w-full gap-10">

      <div className="flex-1 p-8 h-full max-w-md">
        <div className="flex flex-col h-full rounded-md space-y-6">
          <Image
            className="rounded-lg"
            alt="raka-fadilah"
            src="/about.jpg"
            width="90"
            height="90"
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
            <a className="border border-neutral-200 w-full gap-2 dark:border-neutral-800 py-2 px-3 rounded-md" href={siteConfig.locationLink}>
              {siteConfig.location}
            </a>
            <a className="border border-neutral-200 w-full gap-2 dark:border-neutral-800 py-2 px-3 rounded-md" href={`mailto:${siteConfig.email}`}>
              Contact Me
            </a>
          </div>
          
          <div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 h-full">
        <div className="flex items-center justify-center h-full rounded-md dark:bg-emerald-700">
          Right Side
        </div>
      </div>
    </main>
  )
}
