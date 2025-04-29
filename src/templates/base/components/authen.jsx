import { Link } from "react-router";

export function Authen() {
  return (
    <div>
      <Link to="/login" className="border border-white px-2 py-1">
        Login
      </Link>
      <Link to="/register" className="border border-white border-l-0 px-2 py-1">
        Register
      </Link>
    </div>
  );
}
