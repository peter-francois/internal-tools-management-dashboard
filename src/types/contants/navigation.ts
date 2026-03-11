export const NAV_ITEMS = {
  dashboard: {
    label: "Dashboard",
    path: "/",
    placeholder: "Search tools…",
    title: "Internal Tools Dashboard",
    description: "Monitor and manage your organization's software tools and expenses",
  },
  tools: {
    label: "Tools",
    path: "/tools",
    placeholder: "Search tools…",
    title: "Software Tools Management",
    description: "Manage and monitor all your organization's software tools",
  },
  analytics: {
    label: "Analytics",
    path: "/analytics",
    placeholder: "Search reports, charts…",
    title: "Analytics & Reporting",
    description: "Track usage, costs and performance across your tools",
  },
  settings: {
    label: "Settings",
    path: "/settings",
    placeholder: "Search settings…",
    title: "Account & Settings",
    description: "Manage your account, preferences and organization settings",
  },
} as const;
