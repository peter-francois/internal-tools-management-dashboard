import { Zap } from "lucide-react";

const ZapLogo = () => {
  return (
    <div
      className="flex h-7 w-7 items-center justify-around rounded-lg bg-linear-to-br from-blue-400  from-5% via-indigo-500 via-30% to-purple-600"
      aria-hidden="true"
    >
      <Zap size={18} className="text-white " strokeWidth={2} />
    </div>
  );
};

export default ZapLogo;
