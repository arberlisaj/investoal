import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import websiteLogoImage from "../assets/website-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = ["home", "about", "focus", "contact"];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-3 md:px-6 px-2">
          <a href="/">
            <img
              className="max-w-[90px]"
              src={websiteLogoImage || "/placeholder.svg"}
              alt="Investoal"
            />
          </a>

          <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <CiMenuFries size={24} />
          </button>

          <ul className="hidden md:flex space-x-6">
            {navItems.map((section) => (
              <li key={section}>
                <a
                  href={"#" + section}
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-red-800 transition-colors"
                  onClick={closeMenu}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeMenu}
        ></div>
      )}

      <aside
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <a href="/">
              <img
                className="max-w-[70px]"
                src={websiteLogoImage || "/placeholder.svg"}
                alt="Investoal"
              />
            </a>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              {navItems.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="block p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-red-800 transition-colors capitalize"
                    onClick={closeMenu}
                  >
                    {section.replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-200">
            <a
              href="#contact"
              className="block w-full px-4 py-2 text-center text-white bg-red-800 hover:bg-red-700 rounded-md transition-colors"
              onClick={closeMenu}
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
