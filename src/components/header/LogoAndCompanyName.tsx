import { NAV_ITEMS } from "../../types/contants/navigation";
import ZapLogo from "./ZapLogo";
const LogoAndCompanyName = () => {
  return (
    <a
      href={NAV_ITEMS.dashboard.path}
      className="flex items-center gap-2 shrink-0"
      aria-label="TechCorp — go to home"
    >
      <ZapLogo />
      <p className="hidden sm:block font-semibold text-gray-900 tracking-tight text-[15px]">
        TechCorp
      </p>
    </a>
  );
};

export default LogoAndCompanyName;
