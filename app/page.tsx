// import { ThemeToggle } from '@/components/theme.toggle'
import { siteConfig } from '@/config/site.config'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-1 h-full w-full gap-10">
      <div className="flex-1 p-6 h-full max-w-md">
        <div className="flex flex-col h-full rounded-md space-y-6">
          <img 
            className="rounded-full" 
            src="about.jpg" 
            alt="raka-fadilah" 
            width="90" 
             height="90"
            loading="eager"
          />
          <div>
            <div className="text-xl text-primary font-semibold">
              {siteConfig.title}
            </div>
            <div>
              {siteConfig.creator}
            </div>
            <div>
              {siteConfig.bio}
            </div>
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
