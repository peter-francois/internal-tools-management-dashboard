import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main
        className="max-w-7xl mx-auto px-8 py-8"
      >
        <Outlet />
      </main>
    </>
  );
}
