import { fetchLoans } from "@/app/lib/data";
import { LoanStatus } from "./loan-status";
import { formatCurrency } from "@/app/lib/utils";
import Search from "../search";
import { CreateLoan } from "./buttons";
import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
  CheckCircleIcon,
  MagnifyingGlassCircleIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/16/solid";
import LoanApprovalModal from "./approval-modal";
import { LoanOut } from "@/app/lib/definitions";

const headers = [
  { Client: { sortable: true } },
  { "Loan Officer": { sortable: true } },
  { Principal: { sortable: true } },
  { Duration: { sortable: true } },
  { Interest: { sortable: true } },
  { Rate: { sortable: true } },
  { Status: { sortable: true } },
  { Actions: { sortable: false } },
];

export async function LoansTable({
  query,
  page,
  size,
}: {
  query: string;
  page: number;
  size: number;
}) {
  const loans: LoanOut[] = [] // await fetchLoans(page, size);

  return (
    <div className="my-4 p-2 grow flex flex-col gap-3">
      <div className="flex gap-2">
        <Search placeholder="Search loans..." />
        <CreateLoan />
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-gray-700">
            {headers.map((header, idx) => (
              <th key={idx} className="text-start px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="">
                    <div className="group">
                      <ArrowUpCircleIcon
                        className="hidden group-hover:block hover:text-lime-900 text-gray-500"
                        height={12}
                        title="Sort Ascending"
                      />
                      <ArrowUpIcon
                        className="group-hover:hidden hover:text-lime-900 text-gray-500"
                        height={12}
                      />
                    </div>
                    <div className="group">
                      <ArrowDownCircleIcon
                        className="hidden group-hover:block hover:text-lime-900 text-gray-500"
                        height={12}
                        title="Sort Descending"
                      />
                      <ArrowDownIcon
                        className="group-hover:hidden hover:text-lime-900 text-gray-500"
                        height={12}
                      />
                    </div>
                  </div>
                  <span className="whitespace-nowrap">
                    {Object.keys(header)[0]}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, idx) => (
            <tr key={idx} className="py-3 border-b px-2">
              <td className="p-3 whitespace-nowrap bg-white">
                <Link
                  className="hover:text-lime-700 duration-300 text-lime-950 no-underline"
                  href={`/dashboard/clients/${loan.client.id}`}
                >
                  {loan.client.name}
                </Link>
              </td>
              <td className="p-3 whitespace-nowrap bg-white">
                <Link
                  className="hover:text-lime-700 duration-300 text-lime-950 no-underline"
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
                {loan.interest_rate}%
              </td>
              <td className="p-3 whitespace-nowrap bg-white">
                {loan.first_repayment_date}
              </td>
              <td className="p-3 whitespace-nowrap bg-white">
                <LoanStatus status={loan.status} />
              </td>
              <td className="group">
                <div className="flex justify-center px-2">
                  <ArrowDownIcon
                    className="hidden group-hover:block text-lime-700"
                    height={12}
                  />
                  <ArrowRightIcon className="group-hover:hidden" height={12} />
                </div>
                <div className="relative">
                  <div className="hidden group-hover:block absolute bg-white rounded-md p-3 right-2 ring-2 ring-lime-700/50 cursor-pointer">
                    <div className="flex items-center gap-2 hover:text-lime-600 duration-300 border-b px-4 py-1">
                      <MagnifyingGlassCircleIcon height={12} />{" "}
                      <span className="whitespace-nowrap">View Details</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-lime-600 duration-300 border-b px-4 py-2">
                      <PencilIcon height={12} />{" "}
                      <span className="whitespace-nowrap">Edit loan</span>
                    </div>
                    <LoanApprovalModal />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loans.length < 1 && (
        <div className="h-full flex justify-center items-center grow bg-white rounded-md">
          Sorry! This page is empty
        </div>
      )}
    </div>
  );
}
