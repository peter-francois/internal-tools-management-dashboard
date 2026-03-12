import { STAT_CARDS_MOCK } from "../../data/statCard";
import { STAT_CARDS_VISUAL } from "../../types/contants/statCards";
import StatCard from "./StatCard";

const StatCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
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
