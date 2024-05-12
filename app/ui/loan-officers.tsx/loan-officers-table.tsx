"use client";

import Search from "../search";
import EVPagination, { EVTable } from "../ev-pagination";
import { LoanOfficerDto } from "@/app/lib/definitions";
import { fetchPage } from "@/app/lib/data";
import { apis } from "@/app/lib/apis";
import SpringModal from "../spring-modal";
import CreateLoanOfficerForm from "./create-loan-officer-form";

export default function LoanOfficersTable({ count }: { count: number }) {
  return (
    <div className="my-4 p-2 grow flex flex-col gap-3">
      <div className="flex gap-2">
        <Search placeholder="Search clients..." />
        <SpringModal
          anchorClassName="bg-indigo-600 text-[#fff] hover:bg-indigo-700/10 hover:text-indigo-700 duration-300 cursor-pointer px-4 py-1"
          anchorContent="New Loan Officer"
          className="bg-white absolute p-4 border z-50 w-[30rem] top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
        >
          <CreateLoanOfficerForm />
        </SpringModal>
      </div>
      <EVPagination<
        LoanOfficerDto,
        {
          className?: string;
          renderHeader: () => React.ReactNode;
        }
      >
        Title={() => (
          <h4 className="text-xl py-2 font-bold text-indigo-800">
            Loan Officers
          </h4>
        )}
        className="bg-white px-4 pb-8 pt-4 shadow horizontal-scrollbar"
        viewPortClassName="min-h-[20vh]"
        fallback={<h4 className="p-12 text-2xl font-extrabold">Loading...</h4>}
        fetchData={async (page, size) =>
          await fetchPage<LoanOfficerDto>(
            apis.loanOfficers.loanOfficersPagination
              .replace("<:pageNumber>", page + "")
              .replace("<:pageSize>", size + ""),
            "fetching clients"
          )
        }
        count={count}
        initialItemsPerPage={10}
        OtherItemsContainerProps={{
          className: "w-full",
          renderHeader: () => (
            <tr className="">
              <th className="text-start px-2 whitespace-nowrap">Name</th>
              <th className="text-start px-2 whitespace-nowrap">
                Email Address
              </th>
              <th className="text-start px-2 whitespace-nowrap">
                Phone Number
              </th>
            </tr>
          ),
        }}
        ItemsContainer={EVTable<LoanOfficerDto>}
        renderItem={(client: LoanOfficerDto, index: number) => (
          <tr key={index} className="border-b">
            <td className="text-start px-2 py-2 whitespace-nowrap">
              {client.name}
            </td>
            <td className="text-start px-2 py-2 whitespace-nowrap">
              {client.email}
            </td>
            <td className="text-start px-2 py-2 whitespace-nowrap">
              {client.phone}
            </td>
          </tr>
        )}
      />
    </div>
  );
}
