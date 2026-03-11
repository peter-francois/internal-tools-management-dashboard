import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { NAV_ITEMS } from "./types/contants/navigation";
import AppLayout from "./layouts/AppLayout";
import Tools from "./pages/Tools";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={NAV_ITEMS.dashboard.path} element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={NAV_ITEMS.tools.path} element={<Tools />} />
        </Route>
      </Routes>
    </>
  );
}
