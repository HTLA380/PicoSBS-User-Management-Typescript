import React from "react";
import PageTitle from "./page-title/PageTitle";
import LanguageSelector from "./language-selector/LanguageSelector";
import PosScreen from "./pos-screen/PosScreen";
import SoundToggle from "./sound-toggle/SoundToggle";
import ThemeToggle from "./theme-toggle/ThemeToggle";
import UserProfile from "./user-profile/UserProfile";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

interface NavbarInterface {
  toggleSidebar: () => void;
}

const NavBar: React.FC<NavbarInterface> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-10 px-4 md:px-8 py-4 bg-background text-foreground">
      <nav className="flex items-center justify-between">
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleSidebar}
            className="text-secondary-foreground text-2xl rounded-lg hover:text-primary">
            <MdMenu />
          </button>
          <Link href={"/"} className="text-xs text-primary font-bold underline">
            PicoSBS
          </Link>
        </div>
        {/* hide the page title in the small screen sizes */}
        <div className="hidden md:block">
          <PageTitle />
        </div>

        <div className="flex items-stretch h-10 gap-2">
          {/* hide the language selector in the small screen sizes */}
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
          <PosScreen />
          <SoundToggle />
          <ThemeToggle />
          <UserProfile />
        </div>

        {/* display the page title in the small screen sizes */}
      </nav>
      <div className="block md:hidden">
        <PageTitle />
      </div>
    </header>
  );
};

export default NavBar;
