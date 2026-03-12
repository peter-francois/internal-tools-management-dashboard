import {
  useActiveToolsCount,
  useAnalytics,
  useDepartmentsCount,
} from "../../hooks/useAnaliticsService";
import { ERROR_PAGES } from "../../types/contants/errorPages.constant";
import { mapAnaliticsToStatCards } from "../../utils/mapAnaliticsToStatCards";
import ErrorPage from "../ui/ErrorPage";
import StatCard from "./StatCard";

const StatCardList = () => {
  const { data, isLoading, isError, error } = useAnalytics();
  const {
    data: activeTools,
    isLoading: isLoadingTools,
    isError: isErrorTools,
  } = useActiveToolsCount();
  const {
    data: departments,
    isLoading: isLoadingDepts,
    isError: isErrorDepts,
  } = useDepartmentsCount();

  if (isLoading || isLoadingTools || isLoadingDepts) return;

  if (isError) return <ErrorPage {...ERROR_PAGES.serverError} description={error.message} />;

  if (isErrorTools || isErrorDepts) return <ErrorPage {...ERROR_PAGES.serverError} />;

  if (!data || !activeTools || !departments) return <ErrorPage {...ERROR_PAGES.noData} />;

  const cards = mapAnaliticsToStatCards(data, activeTools.toString(), departments.toString());
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {Object.entries(cards).map(([key, card]) => (
        <StatCard key={key} {...card} />
      ))}
    </div>
  );
};

export default StatCardList;
