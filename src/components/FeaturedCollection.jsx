import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function FeaturedCollection({ collection,limit }) {
  const [prdData, setData] = useState(0);
  useEffect(() => {
    fetch(
      `https://www.bakersauthority.com/collections/${collection}/products.json?limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
    <div className="featured_collection">
      <div className="container">
        <div className="fc_header">
          <span className="fc_caption">Today’s</span>
          <h2 className="fc_heading">Flash Sales ({limit})</h2>
        </div>
        <div className="fc_products_grid">
            {prdData &&
              prdData.length !== 0 &&
              prdData.map((product, index) => (
                <Cards
                  product={product}
                  key={product.id}
                  Id={product.id}
                  title={product.title}
                  variants={product.variants}
                  image={product.images[0]?.src}
                  handle={product.handle}
                />
              ))}
          </div>
      </div>
    </div>
    </>
  );
}
