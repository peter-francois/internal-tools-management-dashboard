import { useAnalitics } from "../../hooks/useAnaliticsService";
import { ERROR_PAGES } from "../../types/contants/errorPages.constant";
import { mapAnaliticsToStatCards } from "../../utils/mapAnaliticsToStatCards";
import ErrorPage from "./ErrorPage";
import StatCard from "./StatCard";

const StatCardList = () => {
  const { data, isLoading, isError, error } = useAnalitics();
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
  const cards = mapAnaliticsToStatCards(data, "51", "45");
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {Object.entries(cards).map(([key, card]) => (
        <StatCard key={key} {...card} />
      ))}
    </div>
  );
};

export default StatCardList;
