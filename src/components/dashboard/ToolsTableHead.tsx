import SortIcon from "./SortIcon";
import type { SortField, SortDir } from "../../types/interfaces/tool";
import { COLUMNS } from "../../types/contants/tool";

interface ToolsTableHeadProps {
  sortField: SortField | null;
  sortDir: SortDir;
  onSort: (field: SortField) => void;
}

export default function ToolsTableHead({ sortField, sortDir, onSort }: ToolsTableHeadProps) {
  return (
    <thead>
      <tr className="border-b border-gray-100 dark:border-neutral-800">
        {COLUMNS.map(({ label, field }) => (
          <th
            key={field}
            onClick={() => onSort(field)}
            className="cursor-pointer pb-3 text-left text-xs font-medium tracking-wide text-gray-400
              uppercase transition-colors select-none hover:text-gray-600 dark:text-neutral-500
              dark:hover:text-neutral-300"
          >
            {label}
            <SortIcon field={field} sortField={sortField} sortDir={sortDir} />
          </th>
        ))}
      </tr>
    </thead>
  );
}
