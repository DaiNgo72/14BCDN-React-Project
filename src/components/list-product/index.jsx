import { Link } from "react-router";
import { ProductCard } from "../product-card";

export function ListProduct({ data }) {
  return (
    <div className="grid grid-cols-3 gap-10">
      {data.map((product) => {
        return (
          <Link key={product.id} to={`/product-detail/${product.id}`}>
            <ProductCard
              img={{
                alt: product.name,
                src: product.image,
              }}
              title={product.name}
              description={product.description}
              price={product.price}
            />
          </Link>
        );
      })}
    </div>
  );
}
