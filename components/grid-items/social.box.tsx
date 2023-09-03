import { GridItemInterface } from "@/config/site.config";
import React from "react";
import Icon from "../icon";
import Button from "../button";
import Link from "next/link";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""}>
      <div className="flex items-center justify-between">
        <Icon type={item.icon ?? ""} color={item.color} />
        {item.layout === "2x2" && (
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        )}
      </div>
      <div className="mt-2">
        <div className="@md:text-lg text-base font-semibold">{item.title}</div>
        <div className="text-sm text-neutral-500">{item.username}</div>
        {item.description && (
          <div className="text-sm text-neutral-500 mt-1 line-clamp-2 @lg:line-clamp-none">
            {item.description}
          </div>
        )}
      </div>
      {item.layout === "1x2" && (
        <div className="mt-2">
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        </div>
      )}
    </Link>
  );
};

export default SocialBox;
