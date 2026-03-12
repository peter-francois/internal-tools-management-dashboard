import RecentToolsTable from "../components/dashboard/RecentToolsTable";
import StatCardList from "../components/ui/StatCardList";
import { NAV_ITEMS } from "../types/contants/navigation";

const Dashboard = () => {
  return (
    <>
      <h1>{NAV_ITEMS.dashboard.title}</h1>
      <p>{NAV_ITEMS.dashboard.description}</p>

      <StatCardList />
      <RecentToolsTable/>
    </>
  );
};

export default Dashboard;
