export default function RecentToolsTable() {
  return (
    <div
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-neutral-800
        dark:bg-neutral-950"
    >
          <div className="flex items-center justify-between mb-6">
      <h2>Recent Tools</h2>
      <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400">
        <span>📅</span>
        <span>Last 30 days</span>
      </div>
    </div>
    </div>
  );
}
