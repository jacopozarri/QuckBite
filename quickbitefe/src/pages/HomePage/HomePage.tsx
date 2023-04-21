import { useEffect, useState } from "react";
import { RestaurantModel } from "../../types/Types";
import RestaurantGallery from "../../components/RestaurantGallery/RestaurantGallery";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import "./HomePage.css";
function HomePage() {
  const [restaurant, setRestaurant] = useState<RestaurantModel[]>([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState<
    RestaurantModel[]
  >([]);
  const fetchRestaurant = async () => {
    const result = await fetch("http://localhost:5242/api/Restaurants");
    const data = await result.json();
    setRestaurant(data);
    setFilteredRestaurant(data);
  };
  useEffect(() => {
    fetchRestaurant();
  }, []);
  const filterCard = (value: string) => {
    if (value === "") {
      setFilteredRestaurant(restaurant);
    } else {
      const filtered = restaurant.filter((r) =>
        r.dishes.some((dish) =>
          dish.name.toLowerCase().includes(value.toLowerCase())
        )
      );
      setFilteredRestaurant(filtered);
    }
  };
  const filterPizza = () => {
    const filtered = restaurant.filter((r) =>
      r.dishes.some((dish) => dish.name.toLowerCase().includes("pizza"))
    );
    setFilteredRestaurant(filtered);
  };
  const filterBurger = () => {
    const filtered = restaurant.filter((r) =>
      r.dishes.some((dish) => dish.name.toLowerCase().includes("burger"))
    );
    setFilteredRestaurant(filtered);
  };
  const filterBitterballen = () => {
    const filtered = restaurant.filter((r) =>
      r.dishes.some((dish) => dish.name.toLowerCase().includes("bitterballen"))
    );
    setFilteredRestaurant(filtered);
  };
  const filterPasta = () => {
    const filtered = restaurant.filter((r) =>
      r.dishes.some((dish) => dish.name.toLowerCase().includes("pasta"))
    );
    setFilteredRestaurant(filtered);
  };
  return (
    <main className="home-main">
      <HeaderComponent />
      <div className="home-search-container">
        <input
          className="home-input"
          type="text"
          placeholder="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            filterCard(e.target.value)
          }
        />
        <button className="home-button">Search</button>
      </div>
      <h1 className="home-h1">Categories</h1>
      <div className="container">
        <section onClick={filterPizza} className="home-section">
          <p>Pizza</p>
          <img className="home-img" src="./assets/pizza-logo.png" alt="pizza" />
        </section>
        <section onClick={filterBurger} className="home-section">
          <p>Burger</p>
          <img className="home-img" src="./assets/burger-logo.png" alt="burger" />
        </section>
        <section onClick={filterBitterballen} className="home-section">
          <p>Cacke</p>
          <img className="home-img" src="./assets/cacke-logo.png" alt="cacke" />
        </section>
        <section onClick={filterPasta} className="home-section">
          <p>Pasta</p>
          <img className="home-img" src="./assets/pasta-logo.png" alt="pasta" />
        </section>
      </div>
      <h1 className="home-h1">Restaurants</h1>
      <RestaurantGallery restaurant={filteredRestaurant} />
      <FooterComponent />
    </main>
  );
}
export default HomePage;
