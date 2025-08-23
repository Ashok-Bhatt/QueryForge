import { useTheme } from "../Contexts/themeContext.jsx";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer">
        QnA<span className="text-[rgb(var(--primary))]">Gen</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-6">
        <a href="/" className="hover:text-[rgb(var(--primary))]">
          New QnA
        </a>
        <a href="/previous-qnas" className="hover:text-[rgb(var(--primary))]">
          Previous QnAs
        </a>
        <a href="/documentation" className="hover:text-[rgb(var(--primary))]">
          Documentation
        </a>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="ml-4 px-3 py-1 rounded-lg border border-[rgb(var(--secondary))] hover:bg-[rgb(var(--secondary))] hover:text-[rgb(var(--bg))] transition"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;