import { NAV_ITEMS } from "./navigation.constant";

export const ERROR_PAGES = {
  notFound: {
    code: 404,
    title: "Page not found",
    description: "The page you are looking for does not exist.",
    action: { label: "Back to dashboard", path: NAV_ITEMS.dashboard.path },
  },
  serverError: {
    code: 500,
    title: "Server error",
    description: "Something went wrong on our end.",
    action: { label: "Back to dashboard", path: NAV_ITEMS.dashboard.path },
  },
  noData: {
    code: 404,
    title: "No data found",
    description: "No results were found.",
  },
} as const;
