import clsx from "clsx";
import { useId } from "react";

export function Input({
  type = "text",
  placeholder = "Enter text",
  name = "default",
  className,
  required,
  ...restInput
}) {
  // Generate id dành cho Input form -> accessibility
  const id = useId();

  return (
    <div className="relative inline-block">
      <input
        {...restInput}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "py-2 px-3 text-black border border-neutral-500 rounded-none outline-none",
          "focus:border-b-fuchsia-800 focus:shadow-[0px_1px_0px_0px_#8a0194]",
          {
            "pr-6": required,
          },
          className,
        )}
      />

      {required && (
        <span className="absolute right-0 top-1/2 -translate-y-1/2">(*)</span>
      )}
    </div>
  );
}
