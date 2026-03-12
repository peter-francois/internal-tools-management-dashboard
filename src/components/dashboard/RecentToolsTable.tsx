import { useState } from "react";

import ToolsTableHeader from "./ToolsTableHeader";
import ToolsTableHead from "./ToolsTableHead";
import ToolsTableRow from "./ToolTableRow";
import type { SortDir, SortField } from "../../types/interfaces/tool.interface";
import { TOOLS_MOCK } from "../../data/tools.mock";

export default function RecentToolsTable() {
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const sorted = [...TOOLS_MOCK].sort((a, b) => {
    if (!sortField) return 0;
    const va = a[sortField],
      vb = b[sortField];
    return sortDir === "asc" ? (va > vb ? 1 : -1) : va < vb ? 1 : -1;
  });

  return (
    <div
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-neutral-800
        dark:bg-neutral-950"
    >
      <ToolsTableHeader />
      <table className="w-full">
        <ToolsTableHead sortField={sortField} sortDir={sortDir} onSort={handleSort} />
        <tbody>
          {sorted.map((tool) => (
            <ToolsTableRow key={tool.id} tool={tool} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
