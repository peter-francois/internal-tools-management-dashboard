import { Zap } from "lucide-react";
import { gradient } from "../../utils/gradients";

const ZapLogo = () => {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-around rounded-lg ${gradient( "from-blue-400",
        "via-indigo-500", "to-purple-600", )} `}
      aria-hidden="true"
    >
      <Zap size={18} className="text-white" strokeWidth={2} />
    </div>
  );
};

export default ZapLogo;
