import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] px-6">
      {/* 404 Text */}
      <h1 className="text-7xl font-bold text-[rgb(var(--primary))]">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-[rgb(var(--secondary))] text-center">
        Sorry, the page you are looking for doesn't exist.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-2 rounded-lg bg-[rgb(var(--primary))] text-[rgb(var(--bg))] hover:opacity-90 transition"
      >
        Go Home
      </Link>
    </div>
  );
}

export default PageNotFound;
