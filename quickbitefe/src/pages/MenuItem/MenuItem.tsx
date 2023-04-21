import Counter from "../../components/Counter/Counter";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import "./MenuItem.css";
function MenuItem() {
  return (
    <main>
      <main>
        <HeaderComponent />
        <div className="itemcard-container">
          <Counter />
          <button className="addtocart-button">Add to Cart</button>
        </div>
        <FooterComponent />
      </main>
    </main>
  );
}
export default MenuItem;
