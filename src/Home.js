import Product from "./Product";

const Home = ({ products, liked, setLiked, handleLike }) => {

  return (
    <>
      <div className = "container">
        {products.map((item) => {
          return (
            <Product
              item={item}
              liked={liked}
              setLiked={setLiked}
              handleLike={handleLike}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
