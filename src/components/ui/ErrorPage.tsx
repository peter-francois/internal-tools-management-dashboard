import { useNavigate } from "react-router-dom";
import type { ErrorPageProps } from "../../types/interfaces/errorPageProps";

export default function ErrorPage({ code, title, description, action }: ErrorPageProps) {
  const navigate = useNavigate();

  return (
    <div className="mt-10 flex flex-col items-center gap-10 px-6 text-center">
      <p className="text-[6rem] leading-none font-black select-none sm:text-[10rem]">{code}</p>
      <div className="-mt-6">
        <h1 className="mb-2">{title}</h1>
        <p className="max-w-sm">{description}</p>
      </div>
      {action && (
        <button
          type="button"
          onClick={() => navigate(action.path)}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium
            text-white transition-colors hover:bg-indigo-700"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
