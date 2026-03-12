import ErrorPage from "../components/ui/ErrorPage";
import { ERROR_PAGES } from "../types/contants/errorPages.constant";


export default function NotFound() {
  return (
    <ErrorPage
      code={ERROR_PAGES.notFound.code}
      title={ERROR_PAGES.notFound.title}
      description={ERROR_PAGES.notFound.description}
      action={ERROR_PAGES.notFound.action}
    />
  );
}
