import { useNavigate } from "react-router-dom";
import { NOT_FOUND } from "../types/contants/ui.constant";
import { NAV_ITEMS } from "../types/contants/navigation.constant";


export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="mt-10 flex flex-col items-center gap-10 px-6 text-center">
      <p className="text-[6rem] leading-none font-black select-none sm:text-[10rem]">
        {NOT_FOUND.code}
      </p>

      <div className="-mt-6">
        <h1 className="mb-2">{NOT_FOUND.title}</h1>
        <p className="max-w-sm">{NOT_FOUND.description}</p>
      </div>

      <button
        type="button"
        onClick={() => navigate(NAV_ITEMS.dashboard.path)}
        className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium
          text-white transition-colors hover:bg-indigo-700"
      >
        {NOT_FOUND.backToDashboard}
      </button>
    </div>
  );
}
