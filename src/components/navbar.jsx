import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const linkClassName = ({ isActive }) =>
    `relative block w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-brand-green/5 hover:text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-hover md:w-fit md:rounded-none md:px-0 md:py-2 md:hover:bg-transparent after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-green-600 after:transition-transform after:duration-300 ${
      isActive
        ? "bg-brand-green/10 text-brand-green md:bg-transparent after:scale-x-100"
        : "text-gray-700 md:text-brand-muted"
    }`;

  const menuNav = [
    {
      path: "/home",
      title: "home",
    },
    {
      path: "/about",
      title: "about",
    },
    {
      path: "/skill",
      title: "skill",
    },
    {
      path: "/education",
      title: "education",
    },
    {
      path: "/experience",
      title: "pengalaman",
    },
    {
      path: "/certification",
      title: "certification",
    },
    {
      path: "/portofolio",
      title: "portfolio",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-20 flex flex-wrap items-center justify-between py-4 text-brand-text px-container-mobile transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 md:px-desktop ${
        isScrolled
          ? "border-b border-white/50 bg-white/75 shadow-sm shadow-black/5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <NavLink
        to="/home"
        className="text-xl font-bold text-brand-green"
        onClick={() => setIsMenuOpen(false)}
      >
        Ujang sutisna
      </NavLink>

      <button
        type="button"
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-brand-green/20 text-brand-text transition-colors hover:bg-white/5 hover:text-brand-green-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-hover md:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span
          className={`h-0.5 w-5 bg-current transition-transform duration-200 ${
            isMenuOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-current transition-opacity duration-200 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-current transition-transform duration-200 ${
            isMenuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={`${isMenuOpen ? "block" : "hidden"} absolute left-4 right-4 top-[calc(100%+0.75rem)] rounded-2xl border border-white/70 bg-white/75 p-3 shadow-xl shadow-black/10 backdrop-blur-sm md:static md:block md:w-auto md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none`}
      >
        <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-5">
          {menuNav.map((menu) => {
            const { title, path } = menu;
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={linkClassName}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
          <li>
            <NavLink
              to="/contact"
              className="mt-2 flex min-h-11 w-full items-center justify-center rounded-lg bg-brand-green px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-hover md:mt-0 md:w-auto md:rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
