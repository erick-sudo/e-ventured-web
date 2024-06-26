"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";

// const styles = {
//   buttons: {
//     backgroundColor: "rgb(79, 70, 229)",
//     color: "white",
//     paddingX: "20px",
//     "&:hover": {
//       backgroundColor: "rgba(79, 70, 229, .2)",
//       color: "rgb(79, 70, 229)",
//     },
//   },
// };

export const EButton: React.FC<{
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent | Event) => void;
}> = ({ onClick, disabled, children, type, className }) => {
  return (
    <button
      disabled={disabled}
      className={`bg-indigo-600 text-[#fff] hover:bg-indigo-700/10 hover:text-indigo-700 duration-300 cursor-pointer ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
