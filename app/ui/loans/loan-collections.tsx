import { fetchLoanRepayments, fetchNumberOfRepayments } from "@/app/lib/data";
import React from "react";
import { LoanCollectionsSkeleton } from "../skeletons";
import { formatCurrency } from "@/app/lib/utils";
import EVPagination, { EVTable } from "../ev-pagination";
import { LoanCollectionOut } from "@/app/lib/definitions";

async function LoanCollections({ loanId }: { loanId: string }) {
  const numberOfRepayments = await fetchNumberOfRepayments(loanId);

  return (
    <EVPagination<
      LoanCollectionOut,
      {
        className?: string;
        renderHeader: () => React.ReactNode;
      }
    >
      Title={() => (
        <h4 className="text-lg font-semibold mb-4 sticky left-0">
          Loan Collections
        </h4>
      )}
      className="bg-white px-4 py-8 shadow horizontal-scrollbar"
      viewPortClassName="min-h-[20vh]"
      fallback={<LoanCollectionsSkeleton />}
      fetchData={async (page, size) =>
        await fetchLoanRepayments(loanId, page, size)
      }
      count={numberOfRepayments.count}
      initialItemsPerPage={4}
      OtherItemsContainerProps={{
        className: "w-full",
        renderHeader: () => (
          <tr className="">
            <th className="text-start px-2 whitespace-nowrap">Paid Amount</th>
            <th className="text-start px-2 whitespace-nowrap">
              Collection Date
            </th>
            <th className="text-start px-2 whitespace-nowrap">Time</th>
            <th className="text-start px-2 whitespace-nowrap">
              Payment Method
            </th>
          </tr>
        ),
      }}
      ItemsContainer={EVTable<LoanCollectionOut>}
      renderItem={(repayment: LoanCollectionOut, index: number) => (
        <tr key={index} className="border-b">
          <td className="text-start px-2 py-2 whitespace-nowrap">
            {formatCurrency(repayment.amount)}
          </td>
          <td className="text-start px-2 py-2 whitespace-nowrap">
            {new Date(repayment.collection_date).toDateString()}
          </td>
          <td className="text-start px-2 py-2 whitespace-nowrap">
            {new Date(repayment.collection_date).toTimeString()}
          </td>
          <td className="text-start px-2 py-2 whitespace-nowrap">
            {repayment.payment_method}
          </td>
        </tr>
      )}
    />
  );
}

export default LoanCollections;
