import { Link } from "react-router-dom";
import "./FooterComponent.css";
const FooterComponent: React.FC = () => {
  return (
    <main className="footer-main">
      <div className="footer-container">
        <Link to="/profile">
          <img
            className="footer-img"
            src="./assets/profile-icon.png"
            alt="profile"
          />
        </Link>
      </div>
      <div className="footer-container">
        <Link to="/home">
          <img className="footer-img" src="./assets/home-icon.png" alt="home" />
        </Link>
      </div>
      <div className="footer-container">
        <Link to="/cart">
          <img className="footer-img" src="./assets/cart-icon.png" alt="cart" />
        </Link>
      </div>
    </main>
  );
};
export default FooterComponent;
