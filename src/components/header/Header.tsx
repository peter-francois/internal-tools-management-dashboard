import { useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../types/contants/navigation";
import DesktopNav from "./DesktopNav";
import LogoAndCompanyName from "./LogoAndCompanyName";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";
import NotificationBell from "./NotificationBell";
import SettingsButton from "./SettingsButton";
import UserMenuButton from "./UserMenuButton";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const { pathname } = useLocation();
  const currentNav = Object.values(NAV_ITEMS).find((item) => item.path === pathname);

  function onSearch(query: string) {
    console.log("Search:", query);
  }

  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-sm
        dark:border-neutral-800 dark:bg-neutral-950/90"
    >
      <div className="mx-auto flex h-16 items-center gap-2 px-8 lg:gap-4">
        <LogoAndCompanyName />
        <DesktopNav />

        {/* Separator */}
        <div className="flex-1" />

        <SearchBar placeholder={currentNav?.placeholder ?? "Search…"} onSearch={onSearch} />
        <DarkModeToggle />
        <NotificationBell />
        <SettingsButton />
        <UserMenuButton />
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
