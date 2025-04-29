import { useEffect, useState } from "react";
import { getAllCategoryAPI } from "../../../service/product.service";
import { Link } from "react-router";

export function Category() {
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    getAllCategoryAPI().then((resp) => {
      const listCategory = resp.data.content.filter((product) => {
        if (product.categoryParent) {
          return JSON.parse(product.categoryParent).length === 0;
        } else {
          return false;
        }
      });

      setListCategory(listCategory);
    });
  }, []);

  return (
    <>
      <div className="flex gap-3 px-5 py-2.5 border-b">
        <Link className="capitalize" to={""}>
          Home
        </Link>
        {listCategory.map((category) => {
          return (
            <Link
              className="capitalize"
              key={category.id}
              to={`/${category.category}`}
            >
              {category.alias}
            </Link>
          );
        })}
      </div>
    </>
  );
}
