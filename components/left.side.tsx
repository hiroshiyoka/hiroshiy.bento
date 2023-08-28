import { siteConfig } from "@/config/site.config";
import Image from "next/image";
import React from "react";
import { LuMail, LuMapPin } from "react-icons/lu";
import Footer from "./footer";

const LeftSide = () => {
  return (
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
  );
};

export default LeftSide;
