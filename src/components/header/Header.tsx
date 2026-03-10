import DesktopNav from "./DesktopNav";
import LogoAndCompanyName from "./LogoAndCompanyName";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-40 border-b border-gray-200 bg-white/90">
      <div className="mx-auto flex h-14 items-center gap-4 px-6">
        <LogoAndCompanyName />
        <DesktopNav />
      </div>
    </header>
  );
};

export default Header;
