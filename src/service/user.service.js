import { axiosWithAuth } from "./config";

export function getProfileAPI() {
  return axiosWithAuth("/api/Users/getProfile", {
    method: "post",
  });
}

export function changePasswordAPI(newPassword) {
  return axiosWithAuth("/api/Users/changePassword", {
    method: "post",
    data: {
      newPassword: newPassword,
    },
  });
}
