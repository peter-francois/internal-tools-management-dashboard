import { NavLink } from "react-router-dom";
import ZapLogo from "./ZapLogo";
import { NAV_ITEMS } from "../../types/contants/navigation.constant";
const LogoAndCompanyName = () => {
  return (
    <NavLink
      to={NAV_ITEMS.dashboard.path}
      className="link mr-2.5 shrink-0 gap-3"
      aria-label="TechCorp — go to home"
    >
      <ZapLogo />
      <p
        className="hidden text-xl font-semibold tracking-tight text-neutral-900 sm:block
          dark:text-white"
      >
        TechCorp
      </p>
    </NavLink>
  );
};

export default LogoAndCompanyName;
