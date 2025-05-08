import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "../../../components/avatar";
import { Menu } from "./menu";
import { Link } from "react-router";
import { logout } from "../../../store/user.slice";

export function Profile() {
  const dispatch = useDispatch();
  // lấy state lưu trên redux về
  const user = useSelector((store) => {
    return store.userReducer.user;
  });

  // option chaining

  return (
    <>
      <div className="flex items-center gap-2">
        <p>{user?.name}</p>

        <Menu
          list={[
            {
              id: 1,
              child: (
                <button
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </button>
              ),
            },
            {
              id: 2,
              child: <Link to="/change-password">Change Password</Link>,
            },
          ]}
        >
          <Avatar>{user?.name?.slice(0, 1)}</Avatar>
        </Menu>
      </div>
    </>
  );
}
