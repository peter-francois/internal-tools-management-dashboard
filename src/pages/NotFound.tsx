import ErrorPage from "../components/ui/ErrorPage";
import { NAV_ITEMS } from "../types/contants/navigation.constant";
import { NOT_FOUND } from "../types/contants/ui.constant";

export default function NotFound() {
  return (
    <ErrorPage
      code={NOT_FOUND.code}
      title={NOT_FOUND.title}
      description={NOT_FOUND.description}
      action={{ label: NOT_FOUND.backToDashboard, path: NAV_ITEMS.dashboard.path }}
    />
  );
}
