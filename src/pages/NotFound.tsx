import { useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../types/contants/navigation";
import { NOT_FOUND } from "../types/contants/ui";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-6 text-center gap-10 mt-10">
      <p className="text-[6rem] sm:text-[10rem] font-black leading-none select-none">
        {NOT_FOUND.code}
      </p>

      <div className="-mt-6">
        <h1 className="mb-2">{NOT_FOUND.title}</h1>
        <p className="max-w-sm">{NOT_FOUND.description}</p>
      </div>

      <button
        type="button"
        onClick={() => navigate(NAV_ITEMS.dashboard.path)}
        className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
      >
        {NOT_FOUND.backToDashboard}
      </button>
    </div>
  );
}
