import RecentToolsTable from "../components/dashboard/RecentToolsTable";
import ErrorPage from "../components/ui/ErrorPage";
import StatCardList from "../components/ui/StatCardList";
import { useTools } from "../hooks/useToolService";
import { ERROR_PAGES } from "../types/contants/errorPages.constant";
import { NAV_ITEMS } from "../types/contants/navigation.constant";

const Dashboard = () => {
  const { data, isLoading, isError, error } = useTools({ _sort: "updated_at", _order: "desc", _limit: 8 });
  console.log("🚀 ~ Dashboard.tsx:9 ~ Dashboard ~ data:", data);
  if (isLoading) return;
  if (isError)
    return (
      <ErrorPage
        code={ERROR_PAGES.serverError.code}
        title={ERROR_PAGES.serverError.title}
        description={error.message}
        action={ERROR_PAGES.serverError.action}
      />
    );
  if (!data)
    return (
      <ErrorPage
        code={ERROR_PAGES.noData.code}
        title={ERROR_PAGES.noData.title}
        description={ERROR_PAGES.noData.description}
      />
    );

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
