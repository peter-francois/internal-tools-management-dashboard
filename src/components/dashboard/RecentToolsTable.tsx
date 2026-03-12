import ToolsTableHead from "./ToolsTableHead";
import ToolsTableHeader from "./ToolsTableHeader";

export default function RecentToolsTable() {
  return (
    <div
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-neutral-800
        dark:bg-neutral-950"
    >
      <ToolsTableHeader />
      <ToolsTableHead sortField={null} sortDir="asc" onSort={() => {}} />
    </div>
  );
}
