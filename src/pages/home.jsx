import { Link } from "react-router";

export function Home() {
  return (
    <>
      <h1 className="text-red-500">Welcome to the Home Page</h1>
      {/* onMouseEnter={() => import("../pages/login")} */}
      <Link to={"/login"} onMouseEnter={() => import("../pages/login")} >
        Login
      </Link>
      <Link to="/register">Register</Link>
    </>
  );
}
