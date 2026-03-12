import { useState } from "react";

import ToolsTableHeader from "./ToolsTableHeader";
import ToolsTableHead from "./ToolsTableHead";
import ToolsTableRow from "./ToolTableRow";
import type { SortDir, SortField } from "../../types/interfaces/tool.interface";
import ErrorPage from "../ui/ErrorPage";
import { ERROR_PAGES } from "../../types/contants/errorPages.constant";
import { useTools } from "../../hooks/useToolService";

export default function RecentToolsTable() {
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const { data, isLoading, isError, error } = useTools({
    _sort: "updated_at",
    _order: "desc",
    _limit: 8,
  });
  if (isLoading) return;
  if (isError)
    return (
      <ErrorPage
        code={ERROR_PAGES.serverError.code}
        title={ERROR_PAGES.serverError.title}
        description={error.message}
        action={ERROR_PAGES.serverError.action}
      />
    );
  if (!data)
    return (
      <ErrorPage
        code={ERROR_PAGES.noData.code}
        title={ERROR_PAGES.noData.title}
        description={ERROR_PAGES.noData.description}
      />
    );
  const handleSort = (field: SortField) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const sorted = [...data].sort((a, b) => {
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
