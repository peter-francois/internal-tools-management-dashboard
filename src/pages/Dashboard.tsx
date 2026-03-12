import RecentToolsTable from "../components/dashboard/RecentToolsTable";
import StatCardList from "../components/ui/StatCardList";
import { NAV_ITEMS } from "../types/contants/navigation.constant";

const Dashboard = () => {
  return (
    <>
      <div className="mb-2">
        <h1>{NAV_ITEMS.dashboard.title}</h1>
        <p>{NAV_ITEMS.dashboard.description}</p>
      </div>
      <div className="flex flex-col gap-8">
        <StatCardList />
        <RecentToolsTable />
      </div>
    </>
  );
};

export default Dashboard;
