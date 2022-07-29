import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Liked = ({ products }) => {
  const Id = useParams("id");
  let pd = products.filter((item) => {
    return item.id === Id.id;
  });
  let item = pd[0];
  return (
    <div>
      <h1>
        <span>
        <button>
          <Link to="/">
            <i className="btn fa fa-arrow-left">back</i>
          </Link>
          </button>
        </span>

        {
          <div style={{ border: "1px solid" }}>
            <img height="100" src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <h4>${item.price}</h4>
            <button>Buy</button>
          </div>
        }
      </h1>
    </div>
  );
};

export default Liked;
