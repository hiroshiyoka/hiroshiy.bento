import { siteConfig } from "@/config/site.config";
import React from "react";
import GridItems from "./grid.item";
import SocialBox from "./grid-items/social.box";
import ProjectBox from "./grid-items/project.box";
import SpotifyPlaylist from "./grid-items/spotify.playlist";

const RightSide = () => {
  return (
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
  );
};

export default RightSide;
