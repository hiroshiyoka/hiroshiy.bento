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
        <div className="flex flex-wrap items-center gap-3">
          {item.playlist?.map((playlist) => {
            return (
              <Link
                className="px-2 py-1 font-medium bg-white rounded-lg dark:bg-neutral-900 text-sm"
                key={playlist.link}
                href={playlist.link}
              >
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
