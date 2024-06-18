import { Link } from "react-router-dom";
export default function Cards({ product, Id, title, variants, image, handle }) {
  return (
    <div className="product_card" data-product-id={Id}>
      <div className="pc_image">
        <img
          height="1024"
          width="1024"
          loading="lazy"
          src={image}
          alt="Perfecting Hamantaschen for Purim"
        />
      </div>
      <div className="pc_content">
        <h2 className="pc_heading">{title}</h2>
        <div className="pc_subtext">${variants[0].price}</div>
      </div>
      <Link to={`/products/${handle}`}></Link>
    </div>
  );
}
