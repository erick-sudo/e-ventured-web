import { LoanOfficerDto } from "@/app/lib/definitions";

export function LoanOfficerView({
  loanOfficer,
}: {
  loanOfficer: LoanOfficerDto;
}) {
  return (
    <div className="">
      <div className="">{loanOfficer.name}</div>
      <div className="">{loanOfficer.email}</div>
      <div className="">{loanOfficer.phone}</div>
    </div>
  );
}
