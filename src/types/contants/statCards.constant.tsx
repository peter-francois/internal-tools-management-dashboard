import { TrendingUp, Wrench, Building2, Users } from "lucide-react";

export const STAT_CARDS_VISUAL = {
  monthlyBudget: {
    label: "Monthly Budget",
    icon: <TrendingUp size={16} />,
    fromColor: "from-emerald-400",
    viaColor: "via-emerald-500",
    toColor: "to-teal-600",
  },
  activeTools: {
    label: "Active Tools",
    icon: <Wrench size={16} />,
    fromColor: "from-blue-400",
    viaColor: "via-indigo-500",
    toColor: "to-purple-600",
  },
  departments: {
    label: "Departments",
    icon: <Building2 size={16} />,
    fromColor: "from-orange-600",
    viaColor: "via-red-500",
    toColor: "to-pink-600",
  },
  costPerUser: {
    label: "Cost/User",
    icon: <Users size={16} />,
    fromColor: "from-pink-500",
    viaColor: "via-pink-600",
    toColor: "to-rose-600",
  },
};
