"use client";

import Link from "next/link";
import Search from "../search";
import { EButton } from "../loans/buttons";
import EVPagination, { EVTable } from "../ev-pagination";
import { ClientDto } from "@/app/lib/definitions";
import { fetchPage } from "@/app/lib/data";
import { apis } from "@/app/lib/apis";

export default function ClientsTable({ count }: { count: number }) {
  return (
    <div className="my-4 p-2 grow flex flex-col gap-3">
      <div className="flex gap-2">
        <Search placeholder="Search clients..." />
        <Link href="/dashboard/clients/new">
          <EButton className="py-2 px-4">
            <span>New Client</span>
          </EButton>
        </Link>
      </div>
      <EVPagination<
        ClientDto,
        {
          className?: string;
          renderHeader: () => React.ReactNode;
        }
      >
        // Title={() => <h4></h4>}
        className="bg-white px-4 py-8 shadow horizontal-scrollbar"
        viewPortClassName="min-h-[20vh]"
        fallback={<h4 className="p-12 text-2xl font-extrabold">Loading...</h4>}
        fetchData={async (page, size) =>
          await fetchPage<ClientDto>(
            apis.clients.clientsPagination
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
        ItemsContainer={EVTable<ClientDto>}
        renderItem={(client: ClientDto, index: number) => (
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
