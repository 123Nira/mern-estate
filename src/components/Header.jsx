import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1>
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 rounded-lg p-3 flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        <ui className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:text-yellow-400">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:text-yellow-400">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="hidden sm:inline text-slate-700 hover:text-yellow-400">
              Sign in
            </li>
          </Link>
        </ui>
      </div>
    </header>
  );
}
