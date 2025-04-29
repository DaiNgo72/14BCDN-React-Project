import { axiosWithoutAuth } from "./config";

export function getAllProductAPI() {
  return axiosWithoutAuth("/api/Product");
}

export function getAllCategoryAPI() {
  return axiosWithoutAuth("/api/Product/getAllCategory");
}

export function getProductByIdAPI(id) {
  return axiosWithoutAuth(`/api/Product/getbyid?id=${id}`);
}
