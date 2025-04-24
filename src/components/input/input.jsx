import { mergeClassNames } from "../../common/utils";

export function Input({ type = "text", className, ...props }) {
  return (
    <input
      {...props}
      type={type}
      className={mergeClassNames("px-6 py-4 border", className)}
    />
  );
}
