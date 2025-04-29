import { useSelector } from "react-redux";
import { Avatar } from "../../../components/avatar";

export function Profile() {
  // lấy state lưu trên redux về
  const user = useSelector((store) => {
    return store.userReducer.user;
  });
  
  return (
    <>
      <div className="flex items-center gap-2">
        <p>{user.name}</p>

        <Avatar>{user.name.slice(0, 1)}</Avatar>
      </div>
    </>
  );
}
