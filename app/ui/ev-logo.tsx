import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function EvLogo() {
  return (
    <div className="flex tems-center px-2 py-4">
      <Image width={100} height={0} alt="E-Ventures" src="/logo.png" />
    </div>
  );
}
