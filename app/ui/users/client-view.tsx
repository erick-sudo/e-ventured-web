import { ClientDto } from "@/app/lib/definitions";
import {
  EnvelopeOpenIcon,
  PhoneArrowDownLeftIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const ClientView = ({
  client,
  className,
}: {
  client: ClientDto;
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-3 px-2">
        <UserIcon height={20} className="text-gray-500" />
        <span className="text-gray-70">{client.name}</span>
      </div>
      <div className="flex items-center gap-3 px-2">
        <EnvelopeOpenIcon height={20} className="text-gray-500" />
        <span className="text-gray-70">{client.email}</span>
      </div>
      <div className="flex items-center gap-3 px-2">
        <PhoneArrowDownLeftIcon height={20} className="text-gray-500" />
        <span className="text-gray-70">{client.phone}</span>
      </div>
    </div>
  );
};
