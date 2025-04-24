import src from "./image 8@2x.png";

// HOC: high order component -> Hàm bọc hàm
import { memo } from "react";

function sum(a, b) {
  return a + b;
}

// người ta gọi double là HOC
function double(fn) {
  // middle ware => cổng chắn
  return (a, b) => {
    return fn(a * 2, b * 2);
  };
}

const d = double(sum);
d(3, 4); // 14
sum(3, 4); // 7

function CartIcon_() {
  return (
    <>
      <img src={src} width={40} className="w-10 object-cover" />
    </>
  );
}

// function Không bị re-render: memo: memorize ghi nhớ
// memo chỉ bị re-render khi props thay đổi hoặc state thay đổi
export const CartIcon = memo(CartIcon_);
