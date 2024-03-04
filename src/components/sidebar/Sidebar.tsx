"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sidebarData } from "../../../constants/data";
import { usePathname } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";

interface MenuItem {
  menu_name: string;
  menu_icon: React.ReactNode;
  menu_path: string;
  menu_child?: {
    menu_name: string;
    menu_path: string;
  }[];
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const renderMenuItem = (menu: MenuItem, index: number) => (
    <div key={index} className="block">
      <div className="flex w-full justify-between items-center p-2 text-sm rounded-lg font-medium cursor-pointer">
        <div
          className={`flex justify-start gap-4 w-full text-muted-foreground ${
            menu.menu_child ? "items-start" : "items-center "
          }`}>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`hover:bg-primary-light p-2 rounded-lg ${
              menu.menu_path === pathname ? "bg-primary-light text-primary" : ""
            }`}>
            {menu.menu_icon}
          </button>
          {menu.menu_child ? (
            <div
              className={`flex flex-col items-start w-full duration-500 ${
                isOpen ? "opacity-100" : "opacity-0"
              } `}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`whitespace-nowrap mt-1.5 inline-flex justify-between items-center mr-3 w-full ${
                        open ? "text-primary" : "text-inherit"
                      } ${menu.menu_path === pathname ? "text-primary" : ""}`}>
                      {menu.menu_name}
                      <FaChevronDown
                        className={`w-2 duration-300 ${
                          open ? "rotate-180 transform" : ""
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-sm flex flex-col gap-3 mt-3 whitespace-nowrap">
                      {menu.menu_child?.map((item) => (
                        <Link
                          className={`${
                            item.menu_path === pathname ? "text-primary" : ""
                          }`}
                          key={item.menu_name}
                          href={item.menu_path}>
                          {" "}
                          &#8226; {item.menu_name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ) : (
            <Link
              href={menu.menu_path}
              className={`text-inherit duration-500 ${
                isOpen ? "opacity-100" : "opacity-0"
              } ${
                menu.menu_path === pathname ? "text-primary" : ""
              } whitespace-nowrap`}>
              {menu.menu_name}
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`bg-secondary shadow-lg fixed top-0 bottom-0 left-0 px-2 pt-20 ${
        isOpen ? "w-[17rem]" : "w-16"
      } duration-500 z-40`}>
      <div className="flex flex-col overflow-hidden">
        {sidebarData.map((menu: MenuItem, index: number) =>
          renderMenuItem(menu, index)
        )}
      </div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="absolute text-xs bottom-20 right-0 translate-x-1/2 text-primary-foreground bg-primary p-2 rounded-lg">
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button>
    </div>
  );
};

export default Sidebar;
