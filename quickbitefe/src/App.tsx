import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Profile from "./pages/Profile /Profile";
import Cart from "./pages/Cart/Cart";
import MenuItem from "./pages/MenuItem/MenuItem";
import Payment from "./pages/Payment/Payment";
import Restaurant from "./pages/Restaurants/Restaurants";
import MyOrder from "./pages/MyOrder/MyOrder";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/menuItem" element={<MenuItem />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/:id" element={<Restaurant />} />
      <Route path="/myOrder" element={<MyOrder />} />
    </Routes>
  );
}
export default App;
