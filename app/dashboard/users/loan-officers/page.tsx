import { apis } from "@/app/lib/apis";
import { countEntities } from "@/app/lib/data";
import LoanOfficersTable from "@/app/ui/loan-officers.tsx/loan-officers-table";

export default async function Clients() {
  const numberOfLoanOfficers = await countEntities(apis.loanOfficers.count);

  return (
    <div>
      <LoanOfficersTable count={numberOfLoanOfficers.count} />
    </div>
  );
}
