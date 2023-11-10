"use client";

import { siteConfig } from "@/config/site.config";
import React from "react";
import GridItems from "./grid.item";
import SocialBox from "./grid-items/social.box";
import ProjectBox from "./grid-items/project.box";
import SpotifyPlaylist from "./grid-items/spotify.playlist";
import { useAnimate, stagger } from "framer-motion";

const staggerDelay = stagger(0.1);

const RightSide = () => {
  const [scope, animate] = useAnimate();

  return (
    <div className="flex-1 md:h-full">
      <div className="w-full md:h-full p-6 xl:overflow-y-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[76px] gap-6 xl:gap-10">
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
