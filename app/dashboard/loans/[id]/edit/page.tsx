import { fetchLoanMiniStatement } from "@/app/lib/data";
import { LoanMiniStatement } from "@/app/lib/definitions";
import EditLoanForm from "@/app/ui/loans/edit-loan";
import { LoanDetailsSkelleton } from "@/app/ui/skeletons";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const loan: LoanMiniStatement | null = await fetchLoanMiniStatement(id);

  if (!loan) {
    notFound();
  }

  return (
    <main>
      <Suspense fallback={<LoanDetailsSkelleton />}>
        <EditLoanForm loan={loan.loan} info={loan.info} />
      </Suspense>
    </main>
  );
}
