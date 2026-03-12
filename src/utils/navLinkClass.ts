export function navLinkClass({ isActive, mobile = false }: { isActive: boolean; mobile?: boolean }) {
  return `nav-link ${isActive ? "nav-link-active" : ""} ${mobile ? "nav-link-mobile" : ""}`;
}