import { LuMapPin, LuMail } from "react-icons/lu";
import { ThemeToggle } from "@/components/theme.toggle";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";
import GridItems from "@/components/grid.item";
import { title } from "process";
import SocialBox from "@/components/grid-items/social.box";
import ProjectBox from "@/components/grid-items/project.box";
import SpotifyPlaylist from "@/components/grid-items/spotify.playlist";
import Footer from "@/components/footer";

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
            <div className="text-4xl font-bold mt-2">{siteConfig.creator}</div>
            <div className="text-2xl font-light text-neutral-500">
              {siteConfig.bio}
            </div>
          </div>

          <div className="flex items-center gap-6 justify-between text-sm">
            <a
              className="flex items-center border border-neutral-200 w-full gap-2 dark:border-neutral-800 py-2 px-3 rounded-md"
              href={siteConfig.locationLink}
            >
              <LuMapPin size="16" />
              {siteConfig.location}
            </a>
            <a
              className="flex items-center border border-neutral-200 w-full gap-2 dark:border-neutral-800 py-2 px-3 rounded-md"
              href={`mailto:${siteConfig.email}`}
            >
              <LuMail size="16" />
              Contact Me
            </a>
          </div>

          <Footer />
        </div>
      </div>

      <div className="flex-1 h-full">
        <div className="w-full h-full p-6 overflow-y-auto grid grid-cols-4 auto-rows-[76px] gap-10">
          {siteConfig.items.map((item, index) => {
            return (
              <GridItems key={item.title + index} size={item.layout}>
                {item.type === "social" ? (
                  <SocialBox item={item} />
                ) : item.type === "project" ? (
                  <ProjectBox item={item} />
                ) : item.type === "music" ? (
                  <SpotifyPlaylist item={item} />
                ) : (
                  <div>Not implemented yet</div>
                )}
              </GridItems>
            );
          })}
        </div>
      </div>
    </main>
  );
}
