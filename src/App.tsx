import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { NAV_ITEMS } from "./types/contants/navigation.constant";

const AppLayout = lazy(() => import("./layouts/AppLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Tools = lazy(() => import("./pages/Tools"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={NAV_ITEMS.dashboard.path} element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={NAV_ITEMS.tools.path} element={<Tools />} />
          <Route path={NAV_ITEMS.analytics.path} element={<Analytics />} />
          <Route path={NAV_ITEMS.settings.path} element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
