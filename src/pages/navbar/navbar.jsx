import React, { useState, useEffect } from "react";
import "./Navbar.css";


  const sections = ["home", "about", "skills", "projects", "certificates", "contact"];

const Navbar = () => {

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth"
    });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo-container">
        <span className="logo-pic"> &lt; <span className="span">S M</span> /&gt; </span>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {sections.map((item) => (
          <a
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => handleClick(item)}
          >
            {item}
          </a>
        ))}
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
};

export default Navbar;