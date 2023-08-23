import React from "react";
import Icon from "../icon";
import { GridItemInterface } from "@/config/site.config";

const GithubBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      <Icon type={item.icon ?? ""} />
      <div>{item.title}</div>
    </div>
  );
};

export default GithubBox;
