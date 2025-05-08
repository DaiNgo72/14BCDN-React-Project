import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { KEY_ACCESS_TOKEN } from "../../../common/constants";
import { manageLocalStorage } from "../../../common/utils";
import { USER_FETCH_STATUS } from "../../../store/user.slice";
import { Authen } from "./authen";
import { Profile } from "./profile";
import { ProfileSkeleton } from "./profile.skeleton";
// alt + shift + o
// option + shift + o
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

/**
 * 1.
 * token trong localStorage (v)
 * user trong redux = null
 * => suy luận: đang call api nên hiển thị skeleton
 *
 * 2.
 * token trong localStorage (x)
 * user trong redux = null
 * => người dùng chưa từng login
 *
 * 3.
 * token trong localStorage (v)
 * user trong redux != null
 * => suy luận: đã login vào thành công.
 *
 * - Token -
 * cũng có thời gian hết hạn
 *
 */

export function Header() {
  const userFetchStatus = useSelector((store) => {
    return store.userReducer.userFetchStatus;
  });

  const user = useSelector((store) => {
    return store.userReducer.user;
  });

  const numberOfProduct = useSelector((store) => {
    return store.productReducer.carts.length;
  });

  const token = manageLocalStorage.get(KEY_ACCESS_TOKEN);

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
              {numberOfProduct}
            </span>
          </div>

          {/* Có user ở redux */}
          {user && <Profile />}

          {/* Không có user ở redux + có token */}
          {!user && token && (
            <>
              {userFetchStatus === USER_FETCH_STATUS.FETCHING && (
                <ProfileSkeleton />
              )}

              {userFetchStatus === USER_FETCH_STATUS.SUCCESS && <Profile />}

              {userFetchStatus === USER_FETCH_STATUS.EXPIRED && <Authen />}
            </>
          )}

          {/* Không có user ở redux + khoong có token */}
          {!user && !token && <Authen />}
        </div>
      </header>
    </>
  );
}
