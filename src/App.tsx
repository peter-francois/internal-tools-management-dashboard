import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./pages/Dashboard";
import { NAV_ITEMS } from "./types/contants/navigation";

export default function App() {
  return (
    <>
      <Header />
      <main
        className="max-w-7xl mx-auto px-8 py-8"
      >
        <Routes>
          <Route path={NAV_ITEMS.dashboard.path} element={<Dashboard />}></Route>{" "}
        </Routes>
      </main>
    </>
  );
}
