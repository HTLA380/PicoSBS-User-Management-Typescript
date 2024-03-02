"use client";

import React from "react";
import Link from "next/link";
import { sidebarData } from "./_data/sidebarData";
import { useSidebarStore } from "@/lib/store";
import { usePathname } from "next/navigation";

interface MenuItem {
  menu_name: string;
  menu_icon: React.ReactNode;
  menu_path: string;
}

const Sidebar: React.FC = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const pathname = usePathname();

  const renderMenuItem = (menu: MenuItem, index: number) => (
    <div key={index} className="block">
      <div className="flex w-full justify-between items-center px-4 py-2 text-sm font-medium cursor-pointer hover:text-[#3E97FF]">
        <Link
          href={menu.menu_path}
          className={`flex items-center justify-center gap-4 ${
            menu.menu_path === pathname
              ? "text-primary"
              : "text-muted-foreground "
          }`}>
          {menu.menu_icon}
          <span
            className={`text-inherit duration-500 ${
              !isOpen && "opacity-0"
            } group-hover:opacity-100 whitespace-nowrap`}>
            {menu.menu_name}
          </span>
        </Link>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-[100vh] bg-secondary fixed top-0 left-0 px-2 pt-20 ${
        isOpen ? "w-[17rem]" : "w-20"
      } duration-500 relative hover:w-[17rem] group`}>
      <div className="flex flex-col gap-1 overflow-hidden">
        {sidebarData.map((menu: MenuItem, index: number) =>
          renderMenuItem(menu, index)
        )}
      </div>
    </div>
  );
};

export default Sidebar;
