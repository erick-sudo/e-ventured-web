"use client"

import {
  Cog8ToothIcon,
  CurrencyDollarIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Loans",
    href: "/dashboard/loans",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Clients",
    href: "/dashboard/clients",
    icon: UserGroupIcon,
  },
  {
    name: "Management",
    href: "/dashboard/management",
    icon: Cog8ToothIcon,
  },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex items-center gap-2 p-2 bg-gray-50 rounded-md hover:bg-lime-700 hover:text-white duration-300 no-underline", {
              "text-lime-700": pathname === link.href,
              "text-black": pathname !== link.href
            })}
          >
            <LinkIcon className="w-6 h-6" />
            <span className="hidden md:block pr-4">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
