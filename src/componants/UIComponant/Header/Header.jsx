import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineAccountBox } from "react-icons/md";
import { MdOutlineMovieFilter, MdOutlineMovieCreation } from "react-icons/md";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Search from "./Search";
import "../../../css/header.css";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);


  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const navLinks = [
    { name: "Home", link: "/", label: "Go to Home" },
    { name: "Movies", link: "/movies", label: "Go to Movies and Shows" },
    { name: "TV Shows", link: "/tv-shows", label: "Go to TV Shows" },
    { name: "Genres", link: "/genres", label: "Go to Genres" },
    { name: "Liked Movies", link: "/liked", label: "Go to Liked movies" },
  ];

  const smallButtons = [
    {
      Icon: IoSearch,
      altText: "Search",
      label: "Search",
      onClick: () => searchHandle(),
    },
    {
      Icon: FaRegThumbsUp,
      altText: "Notifications",
      label: "Notifications",
      onClick: () => (window.location.href = "/liked"),
    },
  ];
  // Function to handle search button click
  const searchHandle = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // Function to toggle account menu
  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };
  // Header background color and position based on the current page
  const headerBackground =
    location.pathname === "/" ? "transparent" : "rgba(0, 0, 0, 0.1)";
  const headerPosition = location.pathname === "/" ? "absolute" : "relative";


  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <header
      className="header"
      style={{ background: headerBackground, position: headerPosition }}
    >
      <Link to="/" className="logo" aria-label="Homepage">
        <img alt="Website logo" style={{ content: "var(--logo)"}} />
      </Link>

      <nav className="bigButtonContainer" aria-label="Main navigation">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} className={location.pathname === link.link ? "active" : ""}>
              <Link to={link.link} aria-label={link.label}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="smallButtonContainer">
        {smallButtons.map((button, index) => (
          <button
            key={index}
            aria-label={button.label}
            onClick={button.onClick}
          >
            <button.Icon fill="var(--iconColor)" size={25} aria-hidden="true" />
          </button>
        ))}
        <button aria-label="Account" onClick={toggleAccountMenu}>
          <MdOutlineAccountBox fill="var(--iconColor)" size={25} aria-hidden="true" />
        </button>
        {isAccountMenuOpen && (
          <div className="account-menu">
            <Link to="/" onClick={() => setIsAccountMenuOpen(false)}>
              <span className="icon"><GiPlagueDoctorProfile size={20} fill="var(--iconColor)" /> Profile Coming Soon</span>
            </Link>
            <Link to="/" onClick={() => setIsAccountMenuOpen(false)}>
              <span className="icon"><MdOutlineMovieCreation size={20} fill="var(--iconColor)" /> Login Profile Coming Soon</span>
            </Link>
            <Link to="/" onClick={() => setIsAccountMenuOpen(false)}>
              <span className="icon"><MdOutlineMovieFilter size={20} fill="var(--iconColor)" /> Sign Up Profile Coming Soon</span>
            </Link>
          </div>
        )}

        <DarkModeSwitch
          checked={isDarkMode}
          onChange={setIsDarkMode}
          size={24}
          moonColor="white"
          sunColor="black"
        />
      </div>

      {/* for mobile */}
      <div className="mobile-icon">
        <button aria-label="Open mobile menu" onClick={toggleMobileMenu}>
          <GiHamburgerMenu fill="var(--iconColor)" size={30} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  aria-label={link.label}
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Search isOpen={isSearchOpen} />
    </header>
  );
}
