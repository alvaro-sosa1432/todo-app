import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-white ">
      <Navbar />
      <Outlet />
    </div>
  );
};
