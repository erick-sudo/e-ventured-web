import { ClientDto } from "@/app/lib/definitions";
import { EnvelopeIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export function ClientView({ clientDto }: { clientDto: ClientDto }) {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <UserCircleIcon className="w-3" />
        {clientDto.name}
      </div>
      <div className="flex items-center gap-2">
        <EnvelopeIcon className="w-3" />
        {clientDto.email}
      </div>
    </div>
  );
}
