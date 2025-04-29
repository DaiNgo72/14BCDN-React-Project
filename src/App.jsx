/**
 * đảm bảo App luôn luôn được gọi khi người dùng vào bất kỳ một page nào trong website của chúng ta
 */

import { useEffect } from "react";
import { manageLocalStorage } from "./common/utils";
import { KEY_ACCESS_TOKEN } from "./common/constants";
import { getProfileAPI } from "./service/user.service";
import { useDispatch } from "react-redux";
import {
  setUser,
  setUserFetchStatus,
  USER_FETCH_STATUS,
} from "./store/user.slice";

export default function App({ children }) {
  console.log("[INIT APP]");
  const dispatch = useDispatch();

  useEffect(() => {
    const token = manageLocalStorage.get(KEY_ACCESS_TOKEN);

    if (token) {
      console.log("Token is exist");

      dispatch(setUserFetchStatus(USER_FETCH_STATUS.FETCHING));

      getProfileAPI()
        .then((resp) => {
          dispatch(setUser(resp.data.content));

          // Hiển thị skeleton mượt hơn
          // Delay việc show UI
          setTimeout(() => {
            dispatch(setUserFetchStatus(USER_FETCH_STATUS.SUCCESS));
          }, 300); // 1.5
        })
        .catch(() => {
          dispatch(setUserFetchStatus(USER_FETCH_STATUS.EXPIRED));
        });
    }
  }, []);

  return <>{children}</>;
}
