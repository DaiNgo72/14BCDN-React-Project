import { useEffect, useState } from "react";
import { CartIcon } from "../components/icons/cart/cart";
import { Link } from "react-router";

export function Home() {
  const [c, setC] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("run interval");
      setC((c) => c + 1);
    }, 200);

    return () => {
      // Khi component un-mount thì sẽ gọi function này
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <Link to="/login">Login</Link>

      <h1 className="text-red-500">Welcome to the Home Page</h1>

      <h2>Count: {c}</h2>

      <CartIcon />
    </>
  );
}
