import { apis } from "@/app/lib/apis";
import { countEntities } from "@/app/lib/data";
import LoanOfficersTable from "@/app/ui/loan-officers.tsx/loan-officers-table";
import { Suspense } from "react";

export default async function Clients() {
  const numberOfLoanOfficers = await countEntities(apis.loanOfficers.count);

  return (
    <Suspense fallback={<div className="">Loading...</div>}>
      <div>
        <LoanOfficersTable count={numberOfLoanOfficers.count} />
      </div>
    </Suspense>
  );
}
