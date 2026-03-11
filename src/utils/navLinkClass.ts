export function navLinkClass({ isActive }: { isActive: boolean }) {
  return `flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400"
      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
  }`;
}
