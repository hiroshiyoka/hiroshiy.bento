import React from "react";
import Icon from "../icon";
import { GridItemInterface } from "@/config/site.config";

const GithubBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      <Icon type={item.icon ?? ""} />
    </div>
  );
};

export default GithubBox;
