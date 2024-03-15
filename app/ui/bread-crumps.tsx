"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BreadCrumps() {
  const pathname = usePathname();
  const pathSegments = pathname.slice(1).split("/");

  return (
    <>
      {pathSegments.length > 0 &&
        pathSegments.map((segment, idx) => (
          <Link className="bg-lime-700 px-4 py-2" key={idx} href={pathSegments.slice(0, idx + 1).join("/")}>
            {segment}
          </Link>
        ))}
    </>
  );
}
