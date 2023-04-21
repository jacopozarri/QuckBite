import { itemGalleryProps } from "../../types/Types";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemGallery.css";
const ItemGallery: React.FC<itemGalleryProps> = ({ dishes }) => {
  return (
    <main className="itemgallery-main">
      <h1>Menu</h1>
      {dishes.map((dish) => (
        <ItemCard dish={dish} key={dish.id} />
      ))}
    </main>
  );
};
export default ItemGallery;
