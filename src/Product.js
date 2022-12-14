import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <>
      <div className="product-container">
        <img height="100" src={item.image} alt={item.title} />
        <h4>{item.title}</h4>
        <br />
        <h4>${item.price}</h4>

        <button>
          <Link to={item.id.toString()}>Add to Cart</Link>
        </button>
      </div>
    </>
  );
};

export default Product;
