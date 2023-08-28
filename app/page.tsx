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
import RightSide from "@/components/right.side";

export default function Home() {
  return (
    <main className="flex flex-1 h-full w-full gap-10">
      <LeftSide />
      <RightSide />
    </main>
  );
}
