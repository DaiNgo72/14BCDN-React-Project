import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductByIdAPI } from "../service/product.service";
import { ListProduct } from "../components/list-product";

export default function ProductDetail() {
  const params = useParams();
  console.log(params);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (params.id) {
      getProductByIdAPI(params.id).then((resp) => {
        setProduct(resp.data.content);
      });
    }
  }, []);

  if (!product) return null;

  return (
    <>
      <img className="w-[300px]" src={product.image} />
      <h1>{product.name}</h1>

      <h2 className="text-[40px] text-center mt-[46px]">Relate Product</h2>

      <ListProduct data={product.relatedProducts} />
    </>
  );
}
