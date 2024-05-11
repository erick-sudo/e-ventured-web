"use client"

import clsx from "clsx";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";

export async function LoanStatus({ status }: { status: string }) {
  return (
    <div
      className={clsx(
        "flex w-max rounded-full px-3 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": status === "Pending",
          "bg-lime-800 text-white": status === "Approved",
          "": status === "Disbursing",
        }
      )}
    >
      
      {status === "Pending" ? (
        <ClockIcon className="w-4 h-4 text-gray-500" />
      ) : null}
      {status === "Pending" ? (
        <CheckIcon className="w-4 h-4 text-white" />
      ) : null}
      <span className="">{status}</span>
    </div>
  );
}
