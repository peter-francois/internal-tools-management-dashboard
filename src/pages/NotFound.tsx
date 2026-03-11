import { useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../types/contants/navigation";
import { MoveLeft } from "lucide-react";
import { NOT_FOUND } from "../types/contants/ui";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-6 text-center gap-10 mt-10">
      <p className="text-[10rem] font-black leading-none select-none">{NOT_FOUND.code}</p>

      <div className="-mt-6">
        <h1 className="mb-2">{NOT_FOUND.title}</h1>
        <p className="max-w-sm">{NOT_FOUND.description}</p>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium dark:border-gray-700"
        >
          <MoveLeft size={15} aria-hidden="true" />
          {NOT_FOUND.goBack}
        </button>

        <button
          type="button"
          onClick={() => navigate(NAV_ITEMS.dashboard.path)}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          {NOT_FOUND.backToDashboard}
        </button>
      </div>
    </div>
  );
}
