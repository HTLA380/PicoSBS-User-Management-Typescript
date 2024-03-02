"use client";

import { Menu } from "@headlessui/react";
import React, { useState } from "react";

interface Language {
  name: string;
  imgSrc: string;
}

const languageData: Language[] = [
  {
    name: "မြန်မာ",
    imgSrc: "/assets/images/flags/myanmar.svg",
  },
  {
    name: "English",
    imgSrc: "/assets/images/flags/united-states.svg",
  },
  {
    name: "ภาษาไทย",
    imgSrc: "/assets/images/flags/thailand.svg",
  },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const languagePopoverContent = (
    <Menu.Items className="absolute right-0 mt-2 w-36 p-2 origin-top-right rounded-md bg-popover shadow-md">
      {languageData.map((data) => {
        return (
          <Menu.Item>
            <button
              onClick={() => setSelectedLanguage(data.name)}
              key={data.name}
              className={`flex items-center w-full gap-2 px-4 py-2 my-1 text-xs font-medium rounded-md hover:text-primary ${
                selectedLanguage === data.name
                  ? "bg-accent text-primary"
                  : "bg-transparent text-muted-foreground"
              }`}>
              <img src={data.imgSrc} className="w-4 h-4 rounded-md" />
              {data.name}
            </button>
          </Menu.Item>
        );
      })}
    </Menu.Items>
  );

  // getting the current selected language
  const { name, imgSrc } = languageData.find(
    ({ name }) => name === selectedLanguage
  ) || { name: "", imgSrc: "" };

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center h-full gap-2 w-24 justify-center text-xs font-medium rounded-sm shadow-sm text-secondary-foreground bg-secondary">
          {name}
          <img src={imgSrc} className="w-4 h-4 rounded-md" alt={name} />{" "}
        </Menu.Button>
        {languagePopoverContent}
      </Menu>
    </div>
  );
};

export default LanguageSelector;
