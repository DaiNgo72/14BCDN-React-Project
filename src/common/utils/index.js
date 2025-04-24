export function mergeClassNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function sum(a, b) {
  return a + b;
}

export { manageLocalStorage } from "./local-storage";
