import { GridItemInterface } from "@/config/site.config";
import Image from "next/image";
import React from "react";

const SpotifyPlaylist = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      <div />
      <Image
        className="object-cover object-center"
        fill
        src={item.images ?? ""}
        alt="bg-image"
      />
    </div>
  );
};

export default SpotifyPlaylist;
