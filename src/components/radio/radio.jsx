import clsx from "clsx";
import { useId, useState } from "react";

export function Radio({
  placeholder = "Enter text",
  name = "default",
  className,
  required,
  ...restInput
}) {
  // Generate id dành cho Input form -> accessibility
  const id = useId();
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => {
        setChecked(!checked);
      }}
      className="relative inline-block"
    >
      <input
        {...restInput}
        id={id}
        name={name}
        type={"radio"}
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

      <div />

      {checked && <div className="checked-indicator" />}
    </div>
  );
}
