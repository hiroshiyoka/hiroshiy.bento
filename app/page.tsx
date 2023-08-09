// import { ThemeToggle } from '@/components/theme.toggle'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-1 h-full w-full gap-10">
      <div className="flex-1 p-6 h-full max-w-md">
        <div className="flex items-center justify-center h-full rounded-md dark:bg-emerald-700">
          Left Side
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
