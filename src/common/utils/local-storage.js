export const manageLocalStorage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    const result = localStorage.getItem(key);

    try {
      // try catch vì JSON.parse có thị bị lỗi do người dùng truyền string bị sai format json.
      return result ? JSON.parse(result) : null;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
