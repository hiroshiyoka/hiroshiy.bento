import { GridItemInterface } from "@/config/site.config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpotifyPlaylist = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col justify-end w-full h-full">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90" />
      <Image
        className="object-cover object-center"
        fill
        src={item.images ?? ""}
        alt="bg-image"
      />
      <div className="relative z-20 p-8">
        <div className="text-sm font-medium text-white">{item.title}</div>
        <div>
          {item.playlist?.map((playlist) => {
            return (
              <Link key={playlist.link} href={playlist.link}>
                {playlist.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlaylist;
