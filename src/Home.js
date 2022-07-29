import Product from "./Product";

const Home = ({ products, }) => {

    return (
        <>
            <div className="container">
                {products.map((item) => {
                    return (
                        <Product item={item} />
                    );
                })}
            </div>
        </>
    );
};

export default Home;
