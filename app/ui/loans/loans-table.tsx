import { fetchLoans } from "@/app/lib/data";
import { LoanStatus } from "./loan-status";
import { formatCurrency } from "@/app/lib/utils";
import Search from "../search";
import { EButton } from "./buttons";
import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
  MagnifyingGlassCircleIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/16/solid";
import LoanApprovalModal from "./approval-modal";
import { LoanOut } from "@/app/lib/definitions";
import { IconButton } from "@mui/material";

const headers = [
  { key: "Client", sortable: true },
  { key: "Loan Officer", sortable: true },
  { key: "Principal", sortable: true },
  { key: "Duration", sortable: true },
  { key: "Interest", sortable: true },
  { key: "Rate", sortable: true },
  { key: "Offset Date", sortable: true },
  { key: "Status", sortable: true },
  { key: "Actions", sortable: false },
];

export async function LoansTable({
  query,
  page,
  size,
  count,
}: {
  count: number;
  query: string;
  page: number;
  size: number;
}) {
  const loans: LoanOut[] = await fetchLoans(page, size);

  return (
    <div className="my-4 p-2 grow flex flex-col gap-3">
      <div className="flex gap-2">
        <Search placeholder="Search loans..." />
        <Link href="/dashboard/loans/new">
          <EButton className="py-2 px-4">
            <span>Open Loan</span>
          </EButton>
        </Link>
      </div>
      <div className="horizontal-scrollbar pb-4">
        <table className="w-full">
          <thead>
            <tr className="text-gray-700">
              {headers.map((header, idx) => (
                <th key={idx} className="text-start px-4 py-2">
                  <div className="flex items-center gap-2">
                    {header.sortable && (
                      <div className="">
                        <div className="group">
                          <ArrowUpCircleIcon
                            className="hidden group-hover:block hover:text-indigo-900 text-gray-500"
                            height={12}
                            title="Sort Ascending"
                          />
                          <ArrowUpIcon
                            className="group-hover:hidden hover:text-indigo-900 text-gray-500"
                            height={12}
                          />
                        </div>
                        <div className="group">
                          <ArrowDownCircleIcon
                            className="hidden group-hover:block hover:text-indigo-900 text-gray-500"
                            height={12}
                            title="Sort Descending"
                          />
                          <ArrowDownIcon
                            className="group-hover:hidden hover:text-indigo-900 text-gray-500"
                            height={12}
                          />
                        </div>
                      </div>
                    )}
                    <span className="whitespace-nowrap">{header.key}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loans.length > 0 &&
              loans.map((loan, idx) => (
                <tr key={idx} className="py-3 border-b px-2">
                  <td className="p-3 whitespace-nowrap bg-white">
                    <Link
                      className="hover:text-indigo-700 duration-300 text-indigo-950 no-underline"
                      href={`/dashboard/clients/${loan.client.id}`}
                    >
                      {loan.client.name}
                    </Link>
                  </td>
                  <td className="p-3 whitespace-nowrap bg-white">
                    <Link
                      className="hover:text-indigo-700 duration-300 text-indigo-950 no-underline"
                      href={`/dashboard/loanofficer/${loan.loan_officer.id}`}
                    >
                      {loan.loan_officer.name.split(" ")[0]}
                    </Link>
                  </td>
                  <td className="p-3 whitespace-nowrap bg-white">
                    {formatCurrency(loan.amount)}
                  </td>
                  <td className="p-3 whitespace-nowrap bg-white flex items-center gap-3">
                    <span>{loan.repayment_duration}</span>
                    <span>{loan.repayment_interval}</span>
                  </td>
                  <td className="p-3 whitespace-nowrap bg-white">
                    {loan.type_of_interest}
                  </td>
                  <td className="p-3 whitespace-nowrap bg-white">
                    {loan.interest_rate * 100}%
                  </td>
                  <td className="p-3 whitespace-nowrap bg-white">
                    {loan.first_repayment_date}
                  </td>
                  <td className="p-3 whitespace-nowrap bg-white">
                    <LoanStatus status={loan.status} />
                  </td>
                  <td className="group">
                    <div className="flex justify-center items-center">
                      <Link href={`/dashboard/loans/${loan.id}/edit`}>
                        <IconButton title="View Details">
                          <PencilIcon height={20} />
                        </IconButton>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {loans.length < 1 && (
        <div className="h-full flex justify-center items-center grow bg-white rounded-md">
          Sorry! This page is empty
        </div>
      )}
    </div>
  );
}
