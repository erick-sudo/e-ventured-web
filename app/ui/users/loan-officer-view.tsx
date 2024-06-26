import { LoanOfficerDto } from "@/app/lib/definitions";
import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  PhoneArrowDownLeftIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const LoanOfficerView = ({
  loanOfficer,
  className,
}: {
  className?: string;
  loanOfficer: LoanOfficerDto;
}) => {
  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-3 px-2">
        <UserIcon height={20} className="text-gray-500" />
        <span className="text-gray-70">{loanOfficer.name}</span>
      </div>
      <div className="flex items-center gap-3 px-2">
        <EnvelopeOpenIcon height={20} className="text-gray-500" />
        <span className="text-gray-70">{loanOfficer.email}</span>
      </div>
      <div className="flex items-center gap-3 px-2">
        <PhoneArrowDownLeftIcon height={20} className="text-gray-500" />
        <span className="text-gray-70">{loanOfficer.phone}</span>
      </div>
    </div>
  );
};
