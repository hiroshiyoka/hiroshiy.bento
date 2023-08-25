import { GridItemInterface } from "@/config/site.config";
import Image from "next/image";
import React from "react";

const SpotifyPlaylist = ({ title }: { title: GridItemInterface }) => {
  return (
    <div>
      <div>
        <Image src={item.image ?? ""} alt="bg-image" />
      </div>
    </div>
  );
};

export default SpotifyPlaylist;
