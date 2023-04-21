import { Link } from "react-router-dom";
import "./StartPage.css";
function StartPage() {
  return (
    <main className="start-main">
      <h1 className="start-h1">Welcome to Quickbite</h1>
      <img className="start-img" src="./assets/logo.png" alt="logo" />
      <section className="start-section">
        <h2 className="start-h2">Join us</h2>
        <Link to="/login">
          <button className="start-button">Login</button>
        </Link>
        <p className="start-p">Don't have an account?</p>
        <Link to="/register">
          <button className="start-button">Register</button>
        </Link>
      </section>
    </main>
  );
}
export default StartPage;
