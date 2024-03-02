"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { pageTitleData } from "../../../../constants/data";

const PageTitle = () => {
  const pathname = usePathname();

  const getPageTitleData = (pathname: string) => {
    return pageTitleData.find((data) => data.url === pathname);
  };

  const { title, subtitlePathname, subtitle } =
    getPageTitleData(pathname) || {};

  return (
    <div>
      <h3 className="text-lg font-semibold">{title || ""}</h3>
      <p className="text-[0.8125rem] font-medium capitalize">
        <span className="text-muted-foreground">
          {subtitlePathname || ""} /{" "}
        </span>
        {subtitle || ""}
      </p>
    </div>
  );
};

export default PageTitle;
