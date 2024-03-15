"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function PageResizer({}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePageSize = (size: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (size > 0) {
      params.set("size", `${size}`);
    } else {
      params.delete("size");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 items-center">
      <input
        defaultValue={searchParams.get("size")?.toString()}
        onChange={(e) => {
          handlePageSize(parseInt(e.target.value) || 10);
        }}
        type="number"
        className="text-center w-14 h-8 ring-2 ring-gray-300 outline-lime-700 rounded"
      />
      <label htmlFor="search" className="">
        Per Page
      </label>
    </div>
  );
}
