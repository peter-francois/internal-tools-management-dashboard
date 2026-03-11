import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { NAV_ITEMS } from "./types/contants/navigation";
import AppLayout from "./layouts/AppLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={NAV_ITEMS.dashboard.path} element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}
