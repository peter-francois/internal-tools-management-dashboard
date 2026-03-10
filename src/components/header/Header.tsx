import { useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../types/contants/navigation";
import DesktopNav from "./DesktopNav";
import LogoAndCompanyName from "./LogoAndCompanyName";
import SearchBar from "./SearchBar";

const Header = () => {
  const { pathname } = useLocation();
  const currentNav = Object.values(NAV_ITEMS).find((item) => item.path === pathname);
  function onSearch(query: string) {
    console.log("Search:", query);
  }
  return (
    <header className="sticky top-0 w-full z-40 border-b border-gray-200 bg-white/90">
      <div className="mx-auto flex h-14 items-center gap-4 px-6">
        <LogoAndCompanyName />
        <DesktopNav />
        <div className="flex-1" />
        <SearchBar placeholder={currentNav?.placeholder ?? "Search…"} onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
