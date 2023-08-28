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
import LeftSide from "@/components/left.side";

export default function Home() {
  return (
    <main className="flex flex-1 h-full w-full gap-10">
      <LeftSide />

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
