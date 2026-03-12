import { TOOL_STATUS } from "../../types/contants/tool";
import type { Tool } from "../../types/interfaces/tool";

interface ToolsTableRowProps {
  tool: Tool;
}

export default function ToolsTableRow({ tool }: ToolsTableRowProps) {
  const statusConfig = TOOL_STATUS[tool.status];

  return (
    <tr className="group border-b border-gray-50 transition-colors hover:bg-gray-50 dark:border-neutral-800 dark:hover:bg-neutral-900">
      <td className="py-4 pr-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-base transition-transform group-hover:scale-110 dark:border-neutral-800 dark:bg-neutral-900">
            {tool.icon}
          </div>
          <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">{tool.name}</span>
        </div>
      </td>
      <td className="py-4 pr-4 text-sm text-gray-500 dark:text-neutral-400">{tool.department}</td>
      <td className="py-4 pr-4 text-sm font-medium text-gray-700 dark:text-neutral-300">{tool.users.toLocaleString()}</td>
      <td className="py-4 pr-4 text-sm font-medium text-gray-700 dark:text-neutral-300">€{tool.monthlyCost.toLocaleString()}</td>
      <td className="py-4">
        <span className={`inline-flex items-center rounded-full bg-linear-to-r px-3 py-1 text-xs font-semibold text-white ${statusConfig.fromColor} ${statusConfig.viaColor} ${statusConfig.toColor}`}>
          {statusConfig.label}
        </span>
      </td>
    </tr>
  );
}