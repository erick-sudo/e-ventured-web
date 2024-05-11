import { fetchLoanRepayments, fetchNumberOfRepayments } from "@/app/lib/data";
import React, { Suspense } from "react";
import { LoanCollectionsSkeleton } from "../skeletons";
import Pagination from "../pagination";
import { formatCurrency } from "@/app/lib/utils";

async function LoanCollections({
  loanId,
  searchParams,
}: {
  loanId: string;
  searchParams?: {
    query?: string;
    page?: string;
    size?: string;
  };
}) {
  //const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  const size = Number(searchParams?.size) || 10;
  const numberOfRepayments = await fetchNumberOfRepayments(loanId);
  const repayments = await fetchLoanRepayments(loanId, page, size);

  return (
    <Suspense fallback={<LoanCollectionsSkeleton />}>
      <div className="bg-white p-4 shadow">
        <h4 className="text-lg font-semibold mb-4">Loan Collections</h4>
        <div className="horizontal-scrollbar pt-2 pb-4">
          <table className="w-full">
            <thead>
              <tr className="">
                <th className="text-start px-2">Paid Amount</th>
                <th className="text-start px-2">Collection Date</th>
                <th className="text-start px-2">Time</th>
                <th className="text-start px-2">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {repayments.map((repayment, idx) => (
                <tr key={idx} className="border-b">
                  <td className="text-start px-2 py-2">
                    {formatCurrency(repayment.amount)}
                  </td>
                  <td className="text-start px-2 py-2">
                    {new Date(repayment.collection_date).toDateString()}
                  </td>
                  <td className="text-start px-2 py-2">
                    {new Date(repayment.collection_date).toTimeString()}
                  </td>
                  <td className="text-start px-2 py-2">
                    {repayment.payment_method}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center">
          <Pagination totalPages={Math.ceil(numberOfRepayments.count / size)} />
        </div>
      </div>
    </Suspense>
  );
}

export default LoanCollections;
