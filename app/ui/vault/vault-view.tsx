import { VaultDto } from "@/app/lib/definitions";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export function VaultView({
  vault,
  className,
}: {
  vault: VaultDto;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-3 px-2">
        <AccountBalanceIcon className="text-gray-500" />
        <span className="text-gray-70">{vault.name}</span>
      </div>
    </div>
  );
}
