import { axiosWithAuth } from "./config";

export function getProfileAPI() {
  return axiosWithAuth("/api/Users/getProfile", {
    method: "post",
  });
}
