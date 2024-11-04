import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <span id="navbar-menu" className="fixed z-10 w-full top-0">
        <nav className="">
          <ul className="flex text-text text-xl bg-primary justify-end font-body">
            <li className="px-4 py-3 hover:bg-secondary transition-colors">
              <Link to="/" className="px-2 py-1">Home</Link>
            </li>
            <li className="px-4 py-3 hover:bg-secondary transition-colors">
              <Link to="/about">About us</Link>
            </li>
            <li className="px-4 py-3 hover:bg-secondary transition-colors">
              <Link to="/initiatives">Initiatives</Link>
            </li>
            <li className="px-4 py-3 hover:bg-secondary transition-colors">
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
      </span>

      <Outlet />
    </>
)}
