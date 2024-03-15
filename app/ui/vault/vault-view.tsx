import { VaultDto } from "@/app/lib/definitions";

export function VaultView({ vault }: { vault: VaultDto }) {
  return (
    <div>
      <div className="">{vault.name}</div>
    </div>
  );
}
