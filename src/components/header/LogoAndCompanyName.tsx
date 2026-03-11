import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../types/contants/navigation";
import ZapLogo from "./ZapLogo";
const LogoAndCompanyName = () => {
  return (
    <NavLink
      to={NAV_ITEMS.dashboard.path}
      className="flex items-center gap-3 shrink-0 mr-2.5"
      aria-label="TechCorp — go to home"
    >
      <ZapLogo />
      <p className="hidden sm:block font-semibold text-xl tracking-tight text-neutral-900 dark:text-white">
        TechCorp
      </p>
    </NavLink>
  );
};

export default LogoAndCompanyName;
