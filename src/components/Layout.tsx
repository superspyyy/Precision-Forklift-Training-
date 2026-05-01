import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./SiteSections";

export default function Layout() {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-yellow selection:text-brand-black flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
