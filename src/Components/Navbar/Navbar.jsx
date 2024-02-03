import { Activity, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleNavigation(e) {
    e.preventDefault();
    if (!e.target.classList.contains("nav-link")) return;
    document
      .querySelector(e.target.hash)
      .scrollIntoView({ behavior: "smooth" });
  }

  function handleOpen() {
    setIsMenuOpen(true);
  }

  function handleClose() {
    setIsMenuOpen(false);
  }

  return (
    <nav
      className={`container flex justify-between fixed py-4 rounded-full top-3 w-3/4  ${styles.nav}`}
      onClick={handleNavigation}
    >
      <div className="flex cursor-pointer items-center">
        <span className={styles.icon}>
          <Activity size={30} color="var(--color-primary)" />
        </span>
        <span className="uppercase">enith</span>
      </div>
      {/* Large menu and above */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-5">
          <li>
            <a href="#landing-page" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#classes" className="nav-link">
              Classes
            </a>
          </li>
          <li>
            <a href="#trainers" className="nav-link">
              Trainers
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact-us" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      {/* medium menu and below */}
      <div className="block lg:hidden cursor-pointer">
        {!isMenuOpen && (
          <Menu size={30} onClick={handleOpen} className={styles.menuIcons} />
        )}
        {isMenuOpen && (
          <X size={30} onClick={handleClose} className={styles.menuIcons} />
        )}
      </div>
      {/* dropdown menu */}
      <div
        className={`absolute top-16 pt-28  ${styles.smallMenu} ${
          isMenuOpen ? styles.smallMenuOpen : null
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-5">
          <li>
            <a href="#landing-page" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#classes" className="nav-link">
              Classes
            </a>
          </li>
          <li>
            <a href="#trainers" className="nav-link">
              Trainers
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact-us" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
