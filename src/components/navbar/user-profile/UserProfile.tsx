"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const UserProfile = () => {
  const renderProfileMenuItems = (
    <Menu.Items className="absolute right-0 mt-2 p-2 origin-top-right rounded-lg bg-popover font-medium shadow-md w-64">
      <div className="p-2">
        {/* ===== user information ===== */}
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-12 h-12 text-lg rounded-md text-primary bg-primary-light">
            H
          </button>
          <Menu.Item as="div">
            <p>Htet Aung Lin</p>
            <Link
              href={"/#"}
              className="block text-xs text-muted-foreground hover:text-primary">
              Administrator
            </Link>
          </Menu.Item>
        </div>

        <Menu.Item>
          <Link
            href={"/#"}
            className="block px-4 py-2 mt-2 text-sm rounded-md hover:text-primary hover:bg-accent">
            My Profile
          </Link>
        </Menu.Item>
      </div>

      <div className="px-2 pt-2 border-t border-t-border">
        <Menu.Item>
          <Link
            className="block px-4 py-2 text-sm rounded-md hover:text-primary hover:bg-accent"
            href={"/#"}>
            SignOut
          </Link>
        </Menu.Item>
      </div>
    </Menu.Items>
  );

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center justify-center h-full font-semibold rounded-md bg-primary-light text-primary w-9">
          H
        </Menu.Button>
        {renderProfileMenuItems}
      </Menu>
    </div>
  );
};

export default UserProfile;

// "use client";

// import React, { Fragment, useState } from "react";
// import { IoMdSunny } from "react-icons/io";
// import { BsFillMoonStarsFill } from "react-icons/bs";
// import { FaDesktop } from "react-icons/fa";
// import { Menu, Transition } from "@headlessui/react";

// interface Theme {
//   name: string;
//   icon: React.ReactNode;
// }

// const themeData: Theme[] = [
//   {
//     name: "light",
//     icon: <IoMdSunny />,
//   },
//   {
//     name: "dark",
//     icon: <BsFillMoonStarsFill />,
//   },
//   {
//     name: "system",
//     icon: <FaDesktop />,
//   },
// ];

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState("light");

//   const handleThemeChange = (selectedTheme: string) => {
//     setTheme(selectedTheme);
//   };

//   const renderThemeMenuItems = (
//     <Menu.Items className="absolute right-0 mt-2 w-36 p-2 origin-top-right rounded-md bg-popover shadow-md">
//       {themeData.map((data) => {
//         return (
//           <Menu.Item>
//             <button
//               onClick={() => handleThemeChange(data.name)}
//               key={data.name}
//               className={`capitalize flex items-center w-full gap-2 px-4 py-2 my-1 text-xs rounded-md hover:text-primary font-medium ${
//                 data.name === theme
//                   ? "bg-accent text-primary"
//                   : "bg-transparent text-muted-foreground"
//               }`}>
//               {data.icon}
//               {data.name}
//             </button>
//           </Menu.Item>
//         );
//       })}
//     </Menu.Items>
//   );

//   // Getting the current selected theme
//   const { icon } = themeData.find(({ name }) => name === theme) || { icon: "" };

//   return (
//     <div className="relative">
//       <Menu>
//         <Menu.Button className="flex items-center justify-center w-8 h-full text-sm rounded-md text-muted-foreground bg-secondary hover:text-primary">
//           {icon}
//         </Menu.Button>
//         {renderThemeMenuItems}
//       </Menu>
//     </div>
//   );
// };

// export default ThemeToggle;
