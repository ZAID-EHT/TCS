import { Home, Wrench, ClipboardList, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function BottomNav() {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "About", icon: Info, path: "/about" },
    { label: "Services", icon: Wrench, path: "/expertise" },
    { label: "Estimate", icon: ClipboardList, path: "/estimate" },
  ];

  return (
    <nav className="md:hidden bg-surface-lowest text-primary font-mono text-[10px] tracking-widest border-t-2 border-primary fixed bottom-0 w-full z-50 flex justify-around items-center py-3 pb-safe">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
        return (
          <Link
            key={item.label}
            to={item.path}
            className={`flex flex-col items-center justify-center transition-all ${
              active
                ? "text-secondary font-bold"
                : "text-on-surface-variant hover:text-primary active:scale-95"
            }`}
          >
            <Icon
              className="w-5 h-5 mb-1"
              strokeWidth={active ? 2.5 : 1.5}
            />
            <span className="uppercase">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
