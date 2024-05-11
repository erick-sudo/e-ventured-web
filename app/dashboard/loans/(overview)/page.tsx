import { fetchPageCount } from "@/app/lib/data";
import { LoansTable } from "@/app/ui/loans/loans-table";
import PageResizer from "@/app/ui/page-resizer";
import Pagination from "@/app/ui/pagination";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    size?: string;
  };
}) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  const size = Number(searchParams?.size) || 10;

  const population = await fetchPageCount(size);

  return (
    <div className="mx-4 my-6 grow">
      <div className="ring-4 ring-gray-200/50 p-4 bg-gray-50">
        <h2 className="text-xl px-4">Loans</h2>
        <div className="min-h-[70vh] flex flex-col">
          <LoansTable
            count={population.count}
            page={page}
            size={size}
            query={query}
          />
        </div>
        <div className="px-6">
          <PageResizer />
          <div className="flex justify-center">
            <Pagination totalPages={Math.ceil(population.count / size)} />
          </div>
        </div>
      </div>
    </div>
  );
}
