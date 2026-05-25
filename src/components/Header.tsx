import { Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-surface text-primary font-headline border-b border-outline-variant fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 transition-colors duration-200">
      <div className="flex gap-4">
        <button className="text-primary hover:bg-surface-variant p-2 rounded-full transition-colors flex items-center justify-center md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden md:flex gap-6 items-center uppercase font-mono tracking-widest text-xs font-medium">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
          <Link to="/expertise" className="hover:text-secondary transition-colors">Expertise</Link>
          <Link to="/estimate" className="hover:text-secondary transition-colors">Estimate</Link>
        </div>
      </div>
      <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 text-2xl tracking-tighter uppercase shrink-0 transition-all hover:scale-[1.01]">
        <img
          alt="The Car Store Logo"
          className="h-[45px] w-[45px] object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuApUSPYTKIrEXjxX94_Z_UDboVpDMa2Yt-RvFpVY1eBhAT7r9ngW28sCUA0WWv4MjPLAugCEb3sdVty1MCuo8kTkv_jFSFyCvYD6bRA_fRwTlaL2zuXUa6xXPfSZXr9hpawRn-ENkmIOosuIuHZ_vOu3efHOxXAAMrz9LCtq8YB3ab_LyZDIUJXk2SCCGOOUNKD2q987tABEC5104Zy0CQy_mEyXSjtFFjWwDYtH4k-M2rHZii-D-BBg0H9bknEr0BmEhA6K5E2HkwQ"
        />
        <span className="font-headline font-semibold text-primary">The Car Store</span>
      </Link>
      <button className="text-primary hover:bg-surface-variant p-2 rounded-full transition-colors flex items-center justify-center">
        <ShoppingCart className="w-6 h-6" />
      </button>
    </header>
  );
}
