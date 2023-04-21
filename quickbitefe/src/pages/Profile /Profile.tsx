import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorResponse, User } from "../../types/Types";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./Profile.css";
function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    fetch("http://localhost:5242/Auth/user", {
      method: "GET",
      headers: { Authorization: `Bearer ${jwt}` },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError((error as ErrorResponse)?.message ?? "Unknown error");
        setLoading(false);
      });
  }, [navigate]);
  const handleLogout = async () => {
    const response = await fetch("http://localhost:5242/Auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      navigate("/login");
    } else {
      setError("Failed to logout");
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <main className="profile-main">
      <HeaderComponent />
      <h1 className="profile-h1">User Profile</h1>
      <img className="profile-img" src="./assets/user.png" alt="user" />
      <section className="profile-section">
        <p className="profile-p">
          Name: {user.firstName} {user.lastName}
        </p>
        <p className="profile-p">Email: {user.email}</p>
        <p className="profile-p">Number: {user.phoneNumber}</p>
        <p className="profile-p">Address: {user.address}</p>
        <button className="profile-button" onClick={handleLogout}>
          Logout
        </button>
      </section>
      <FooterComponent />
    </main>
  );
}
export default Profile;
