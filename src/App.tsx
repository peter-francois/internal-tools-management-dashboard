import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layouts/AppLayout";
import Tools from "./pages/Tools";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { NAV_ITEMS } from "./types/contants/navigation.constant";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={NAV_ITEMS.dashboard.path} element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={NAV_ITEMS.tools.path} element={<Tools />} />
          <Route path={NAV_ITEMS.analytics.path} element={<Analytics />} />
          <Route path={NAV_ITEMS.settings.path} element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
