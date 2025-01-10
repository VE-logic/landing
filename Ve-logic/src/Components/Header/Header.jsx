import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <Nav />
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