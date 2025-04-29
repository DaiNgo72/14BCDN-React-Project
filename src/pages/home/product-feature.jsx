import { useEffect, useState } from "react";
import { ProductCard } from "../../components/product-card";
import { getAllProductAPI } from "../../service/product.service";
import { Link } from "react-router";

export function ProductFeature() {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getAllProductAPI().then((resp) => {
      setListProduct(resp.data.content);
    });
  }, []);

  return (
    <>
      <h2 className="text-[40px] text-center mt-[46px]">Product Feature</h2>

      {/* List Product */}
      <div className="px-[100px] mt-[80px]">
        <ListProduct data={listProduct} />
      </div>
    </>
  );
}

// Tạo file riêng
function ListProduct({ data }) {
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
