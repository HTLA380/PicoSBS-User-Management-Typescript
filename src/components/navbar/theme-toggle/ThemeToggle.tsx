"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { Menu } from "@headlessui/react";

interface Theme {
  name: string;
  icon: React.ReactNode;
}

const themeData: Theme[] = [
  {
    name: "light",
    icon: <IoMdSunny />,
  },
  {
    name: "dark",
    icon: <BsFillMoonStarsFill />,
  },
  {
    name: "system",
    icon: <FaDesktop />,
  },
];

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true));

  if (!mounted) return null;

  const renderThemeMenuItems = (
    <Menu.Items className="absolute right-0 mt-2 w-36 p-2 origin-top-right rounded-md bg-popover shadow-md">
      {themeData.map((data) => (
        <Menu.Item key={data.name}>
          <button
            onClick={() => setTheme(data.name)}
            className={`capitalize flex items-center w-full gap-2 px-4 py-2 my-1 text-xs rounded-md hover:text-primary font-medium ${
              data.name === theme
                ? "bg-accent text-primary"
                : "bg-transparent text-muted-foreground"
            }`}>
            {data.icon}
            {data.name}
          </button>
        </Menu.Item>
      ))}
    </Menu.Items>
  );

  const { icon } = themeData.find(({ name }) => name === theme) || {};

  if (resolvedTheme)
    return (
      <div className="relative">
        <Menu>
          <Menu.Button className="flex items-center justify-center w-8 h-full text-sm rounded-md text-muted-foreground bg-secondary hover:text-primary">
            {icon}
          </Menu.Button>
          {renderThemeMenuItems}
        </Menu>
      </div>
    );
};

export default ThemeToggle;
