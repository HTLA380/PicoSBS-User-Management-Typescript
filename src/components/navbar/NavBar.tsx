import React from "react";
import PageTitle from "./page-title/PageTitle";
import LanguageSelector from "./language-selector/LanguageSelector";
import PosScreen from "./pos-screen/PosScreen";
import SoundToggle from "./sound-toggle/SoundToggle";
import ThemeToggle from "./theme-toggle/ThemeToggle";
import UserProfile from "./user-profile/UserProfile";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-10 px-8 py-4 bg-background text-foreground">
      <nav className="flex items-center justify-between">
        <PageTitle />

        <div className="flex items-stretch h-10 gap-2">
          <LanguageSelector />
          <PosScreen />
          <SoundToggle />
          <ThemeToggle />
          <UserProfile />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
