import { NAV_ITEMS } from "../../types/contants/navigation";
import ZapLogo from "./ZapLogo";
const LogoAndCompanyName = () => {
  return (
    <a
      href={NAV_ITEMS.dashboard.path}
      className="flex items-center gap-3 shrink-0 mr-2.5"
      aria-label="TechCorp — go to home"
    >
      <ZapLogo />
      <p className="hidden sm:block font-semibold text-xl text-gray-900 tracking-tight text-">
        TechCorp
      </p>
    </a>
  );
};

export default LogoAndCompanyName;
