import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function AppLayout() {
  return (
    <div
      className="min-h-screen bg-white dark:bg-[#0f0f0f] dark:bg-size-[50px_50px]"
      style={{
        backgroundImage: `var(--grid)`,
      }}
    >
      <style>{`
        :root { --grid: none; }
        .dark { --grid: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px); }
      `}</style>
      <Header />
      <main className="mx-auto max-w-7xl px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
