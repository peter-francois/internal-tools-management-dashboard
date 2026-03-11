import StatCard from "../components/ui/StatCard";
import { STAT_CARDS_MOCK } from "../data/statCard";
import { NAV_ITEMS } from "../types/contants/navigation";
import { STAT_CARDS_VISUAL } from "../types/contants/statCards";

const Dashboard = () => {
  return (
    <>
      <h1>{NAV_ITEMS.dashboard.title}</h1>
      <p>{NAV_ITEMS.dashboard.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {Object.keys(STAT_CARDS_VISUAL).map((key) => (
          <StatCard
            key={key}
            {...STAT_CARDS_VISUAL[key as keyof typeof STAT_CARDS_VISUAL]}
            {...STAT_CARDS_MOCK[key as keyof typeof STAT_CARDS_MOCK]}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
