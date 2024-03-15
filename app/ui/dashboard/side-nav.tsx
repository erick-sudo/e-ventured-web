import Link from "next/link";
import { EvLogo } from "../ev-logo";
import { NavLinks } from "../nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";

export function SizeNav() {
  return (
    <div className="flex flex-col gap-1 p-2">
      <Link className="bg-lime-700 rounded-md text-white pb-2 no-underline" href="/">
        <div className="flex items-center justify-center">
          <EvLogo />
        </div>
      </Link>
      <div className="grow flex flex-col gap-1">
        <NavLinks />
        <div className="grow bg-gray-50 rounded-md"></div>
        <form>
          <button className="flex items-center gap-2 rounded-md bg-gray-50 p-2 w-full hover:bg-lime-700 hover:text-white duration-300">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
