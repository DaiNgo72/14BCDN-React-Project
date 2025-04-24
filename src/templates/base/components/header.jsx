import { ShoppingCart } from "lucide-react";
import { Avatar } from "../../../components/avatar";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function LogoIcon() {
  return (
    <>
      <img
        src="/logo.png"
        className="w-[116px] h-[32px]"
        alt="logo cyber soft"
      />
    </>
  );
}

export function Header() {
  // lấy state lưu trên redux về
  const user = useSelector((store) => {
    return store.userReducer.user;
  });

  return (
    <>
      <header className="h-[50px] bg-black px-6 py-2 text-white flex justify-between items-center">
        <div>
          <LogoIcon />
        </div>

        <div className="flex gap-4">
          <div className="relative flex items-center">
            <ShoppingCart />
            <span className="absolute left-1/2 bottom-1/2 bg-red-500 rounded-full w-5 h-5 text-center text-white text-xs leading-5">
              0
            </span>
          </div>

          {user !== null ? (
            <div className="flex items-center gap-2">
              <p>{user.name}</p>

              <Avatar>{user.name.slice(0, 1)}</Avatar>
            </div>
          ) : (
            <div>
              <Link to="/login" className="border border-white px-2 py-1">
                Login
              </Link>
              <Link
                to="/register"
                className="border border-white border-l-0 px-2 py-1"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
