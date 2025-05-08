import { Fragment, useState } from "react";

export function Menu({ children, list }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Parent: relative */}
      {/* trigger */}
      {/* content: absolute */}

      <div className="relative">
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {children}
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 bg-white shadow-lg p-4 min-w-48 text-black">
            {list.map((option) => {
              return <div key={option.id}>{option.child}</div>;
            })}
          </div>
        )}
      </div>
    </>
  );
}
