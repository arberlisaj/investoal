import { useState } from "react";
import websiteLogoImage from "../assets/website-logo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-3 md:px-6 px-2">
          <a href="/">
            <img
              className="max-w-[90px]"
              src={websiteLogoImage}
              alt="Investoal"
            />
          </a>

          <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <CiMenuFries size={24} />
          </button>
          <ul className="hidden md:flex space-x-6">
            {["home", "about", "foresight", "focus", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="hover:text-blue-600 capitalize"
                  >
                    {section.replace("-", " ")}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-40"
          onClick={closeMenu}
        ></div>
      )}
      <aside
        className={`hide_on_desktop fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform z-50 p-6`}
      >
        <button className="text-xl mb-4" onClick={closeMenu}>
          <IoMdClose />
        </button>
        <ul>
          {["home", "about", "foresight", "focus", "contact"].map((section) => (
            <li key={section} className="mb-4">
              <a
                href={`#${section}`}
                className="capitalize"
                onClick={closeMenu}
              >
                {section.replace("-", " ")}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
