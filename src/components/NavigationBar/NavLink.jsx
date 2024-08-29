import { Link } from "react-router-dom";

// untuk membuat link yang akan digunakan di navigasi
export default function NavLink({ href, children }) {
  return (
    <li>
      <Link
        to={href}
        className="block md:inline-block text-blue-light hover:text-blue-base px-3 py-3 border-b-2 border-dark-base md:border-none normal-font-size hover:text-primary font-bold"
      >
        {children}
      </Link>
    </li>
  );
}
// Compare this snippet from src/components/NavigationBar/index.jsx:
