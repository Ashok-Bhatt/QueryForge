import { useTheme } from "../Contexts/themeContext.jsx";
import {Sun, Moon} from "lucide-react";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md border-b-1 border-[rgb(var(--secondary))] bg-[rgb(var(--bg-secondary))] text-[rgb(var(--text))]">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer">
        <img src="/Images/queryforge_logo.png" alt="Query Forge Logo" className="h-10 w-10" />
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-10">
        <a href="/" className="hover:text-[rgb(var(--primary))]">
          Home
        </a>
        <a href="/qna/new" className="hover:text-[rgb(var(--primary))]">
          New QnA
        </a>
        <a href="/previous-qnas" className="hover:text-[rgb(var(--primary))]">
          Previous QnAs
        </a>
        <a href="/documentation" className="hover:text-[rgb(var(--primary))]">
          Documentation
        </a>
      </div>

      {/* Theme Toggle Switch */}
      <div className="ml-4 flex items-center">
        <button
          onClick={toggleTheme}
          className={`w-16 h-8 flex items-center rounded-full border border-[rgb(var(--secondary))] transition bg-[rgb(var(--secondary))] relative focus:outline-none`}
          aria-label="Toggle theme"
        >
          <span
            className={`absolute left-1 w-6 h-6 rounded-full transition-transform duration-300 text-[rbg(var(--text))] ${theme === "light" ? "translate-x-0 " : "translate-x-8"}`}
          >
            {theme === "light" ? (<Sun className="h-full w-full" />) : (<Moon className="h-full w-full"/>)}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;