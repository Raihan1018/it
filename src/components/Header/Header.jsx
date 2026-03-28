import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { menuItems } from "../../routes/menuConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import Logo from "../Logo/Logo";

const Header = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // THEME STATE: Initialize from localStorage or system preference
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  // Apply theme to HTML tag whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const closeMenu = () => {
    setIsMobileOpen(false);
    const elem = document.activeElement;
    if (elem) elem.blur();
  };

  const isParentActive = (children) => {
    return children?.some((child) => location.pathname.startsWith(child.path));
  };

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-sm sticky top-0 z-50 px-4 lg:px-16 border-b border-base-200/50">
      {/* LEFT: Logo & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden mr-2 text-base-content p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            onBlur={() => setIsMobileOpen(false)}
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={24} className="text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-56 p-2 shadow-xl bg-base-100 rounded-lg z-20"
          >
            {menuItems.map((item) => (
              <li key={item.path}>
                {item.children ? (
                  <>
                    <span className="font-semibold opacity-50 uppercase text-[10px] tracking-widest">
                      {item.label}
                    </span>
                    <ul className="p-2">
                      {item.children.map((sub) => (
                        <li key={sub.path}>
                          <NavLink to={sub.path} onClick={closeMenu}>
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink to={item.path} onClick={closeMenu}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Logo />
      </div>

      {/* CENTER: Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className="relative py-6"
              onMouseEnter={() => setOpenMenu(item.path)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.children ? (
                <div className="group">
                  <div
                    className={`flex items-center gap-1 cursor-pointer text-[15px] transition-colors ${isParentActive(item.children) || openMenu === item.path ? "text-primary font-medium" : "text-base-content/70 hover:text-primary"}`}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: openMenu === item.path ? 180 : 0 }}
                      className="text-xs"
                    >
                      <FiChevronDown />
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {openMenu === item.path && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-[-20px] top-full w-48"
                      >
                        <ul className="bg-base-100 shadow-xl rounded-lg py-3 border border-base-200">
                          {item.children.map((sub) => (
                            <li key={sub.path}>
                              <NavLink
                                to={sub.path}
                                className={({ isActive }) =>
                                  `block px-6 py-2.5 text-sm ${isActive ? "text-primary font-bold border-l-2 border-primary bg-primary/5" : "text-base-content/70 hover:text-primary"}`
                                }
                              >
                                {sub.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-[15px] py-1 ${isActive ? "text-primary font-medium" : "text-base-content/70 hover:text-primary"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-primary"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT: Theme Toggle & CTA */}
      <div className="navbar-end gap-2">
        {/* THEME TOGGLE BUTTON */}
        <button
          onClick={handleThemeToggle}
          className="btn btn-ghost btn-circle text-base-content/70 hover:text-primary transition-colors"
          aria-label="Toggle Theme"
        >
          <AnimatePresence mode="wait">
            {theme === "light" ? (
              <motion.div
                key="moon"
                initial={{ y: 10, opacity: 0, rotate: 45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -10, opacity: 0, rotate: -45 }}
                transition={{ duration: 0.2 }}
              >
                <FiMoon size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ y: 10, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -10, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <FiSun size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <NavLink
          to="/contact"
          className="text-sm font-semibold text-primary border-b-2 border-primary/20 hover:border-primary pb-0.5 transition-all ml-2 hidden sm:block"
        >
          Get Quote →
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
