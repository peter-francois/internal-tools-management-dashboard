import { STAT_CARDS_MOCK } from "../../data/statCard";
import { STAT_CARDS_VISUAL } from "../../types/contants/statCards";
import StatCard from "./StatCard";

const StatCardList = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {Object.keys(STAT_CARDS_VISUAL).map((key) => (
        <StatCard
          key={key}
          {...STAT_CARDS_VISUAL[key as keyof typeof STAT_CARDS_VISUAL]}
          {...STAT_CARDS_MOCK[key as keyof typeof STAT_CARDS_MOCK]}
        />
      ))}
    </div>
  );
};

export default StatCardList;
