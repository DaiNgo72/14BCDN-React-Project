import { useState } from "react";
import { CircleArrowRight, CircleArrowLeft } from "lucide-react";

export function Carousel({ list, title, description }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => {
          if (index === 0) return;

          setIndex(index - 1);
        }}
      >
        <CircleArrowLeft />
      </button>

      <div>
        <img src={list[index].img} className="w-[300px]" />

        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <button
        onClick={() => {
          if (index === list.length - 1) return;

          setIndex(index + 1);
        }}
      >
        <CircleArrowRight />
      </button>
    </div>
  );
}
