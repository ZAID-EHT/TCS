import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BottomNav } from "./BottomNav";
import { useEffect } from "react";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="pt-16 pb-16 md:pb-0 bg-surface-lowest min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
