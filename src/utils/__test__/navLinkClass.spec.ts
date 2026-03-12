import { navLinkClass } from "../navLinkClass";

describe("navLinkClass", () => {
  it("returns base nav-link class", () => {
    expect(navLinkClass({ isActive: false })).toContain("nav-link");
  });

  it("adds active class when active", () => {
    expect(navLinkClass({ isActive: true })).toContain("nav-link-active");
  });

  it("adds mobile class when mobile", () => {
    expect(navLinkClass({ isActive: false, mobile: true })).toContain("nav-link-mobile");
  });

  it("adds both modifiers", () => {
    const result = navLinkClass({ isActive: true, mobile: true });

    expect(result).toContain("nav-link-active");
    expect(result).toContain("nav-link-mobile");
  });
});