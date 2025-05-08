import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductByIdAPI } from "../service/product.service";
import { ListProduct } from "../components/list-product";
import { Plus } from "lucide-react";
// --------
import { useDispatch } from "react-redux";
import { addToCart } from "../store/product.slice";

// 2
// -> 3
export default function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!product) return;

    dispatch(
      addToCart({
        id: product.id,
        quantity,
      }),
    );
  };

  // chỉ call api khi component được mount trên giao diện
  useEffect(() => {
    if (params.id) {
      getProductByIdAPI(params.id).then((resp) => {
        setProduct(resp.data.content);
      });
    }
  }, [params.id]);

  if (!product) return null;

  return (
    <>
      <img
        className="w-72 h-72 object-cover mx-auto"
        src={product.image}
        alt={product.name}
      />
      <h1 className="text-2xl font-bold text-center mt-4">{product.name}</h1>

      <div className="flex items-center justify-center mt-4 space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
        <input
          type="number"
          value={quantity}
          className="w-16 text-center border border-gray-300 rounded"
          onChange={(e) => {
            const value = e.target.value;
            if (value < 1) {
              setQuantity(1);
            } else {
              setQuantity(value);
            }
          }}
        />

        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => {
            setQuantity(quantity > 1 ? quantity - 1 : 1);
          }}
        >
          -
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add to cart
        </button>
      </div>

      <h2 className="text-4xl font-semibold text-center mt-12">
        Related Products
      </h2>

      <ListProduct data={product.relatedProducts} />
    </>
  );
}
