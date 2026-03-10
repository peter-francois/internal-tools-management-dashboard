import { useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../types/contants/navigation";
import DesktopNav from "./DesktopNav";
import LogoAndCompanyName from "./LogoAndCompanyName";
import SearchBar from "./SearchBar";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import NotificationBell from "./NotificationBell";
import SettingsButton from "./SettingsButton";
import UserMenuButton from "./UserMenuButton";

const Header = () => {
  const { pathname } = useLocation();
  const currentNav = Object.values(NAV_ITEMS).find((item) => item.path === pathname);
  const [darkMode, setDarkMode] = useState(false);

  function onSearch(query: string) {
    console.log("Search:", query);
  }

  function onToggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <header className="sticky top-0 w-full z-40 border-b border-gray-200 bg-white/90">
      <div className="mx-auto flex h-14 items-center gap-2.5 px-8">
        <LogoAndCompanyName />
        <DesktopNav />
        <div className="flex-1" />
        <SearchBar placeholder={currentNav?.placeholder ?? "Search…"} onSearch={onSearch} />
        <DarkModeToggle isDarkMode={darkMode} onToggle={onToggleDarkMode} />
        <NotificationBell />
        <SettingsButton />
        <UserMenuButton />
      </div>
    </header>
  );
};

export default Header;
