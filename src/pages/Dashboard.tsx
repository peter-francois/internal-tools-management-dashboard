import { TrendingUp } from "lucide-react";
import StatCard from "../components/ui/StatCard";
import { NAV_ITEMS } from "../types/contants/navigation";

const Dashboard = () => {
  return (
    <>
      <h1>{NAV_ITEMS.dashboard.title}</h1>
      <p>{NAV_ITEMS.dashboard.description}</p>
      <StatCard
        label="Monthly Budget"
        icon={<TrendingUp size={16} />}
        value="€28,750"
        valueSecondary="/€30k"
        trend="+12%"
        trendVariant="positive"
        fromColor="from-emerald-500"
        viaColor="via-emerald-500"
        toColor="to-teal-600"
      />
    </>
  );
};

export default Dashboard;
