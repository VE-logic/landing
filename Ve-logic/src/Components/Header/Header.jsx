import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import NavMobile from "../Nav/NavMobile";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Condición para detectar móviles
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      {isMobile ? <NavMobile /> : <Nav />}
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f">face</i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter">tw</i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;