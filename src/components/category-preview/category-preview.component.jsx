// React
import { Link } from "react-router-dom";
// Components:
import ProductCard from "../product-card/product-card.component";

// Styles:
import { CategoryPreviewContainer } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
