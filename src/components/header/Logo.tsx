import ZapLogo from "./ZapLogo";
const LogoAndCompanyName = () => {
  return (
    <a href="/" className="flex items-center gap-2 shrink-0">
      <ZapLogo />
      <p className="font-semibold text-gray-900">TechCorp</p>
    </a>
  );
};

export default LogoAndCompanyName;
