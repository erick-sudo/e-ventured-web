// Loading animation
const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton({
  cols,
  tdClassName,
}: {
  cols: number;
  tdClassName?: string;
}) {
  return (
    <tr
      className={`w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg`}
    >
      {new Array(cols).fill(0).map((_, idx) => (
        <td key={idx} className={`${shimmer} whitespace-nowrap px-3 py-3`}>
          <div className={`h-6 rounded bg-gray-100 ${tdClassName}`}></div>
        </td>
      ))}
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function CustomersTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Invoices
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Pending
                </th>
                <th scope="col" className="px-4 py-5 font-medium">
                  Total Paid
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton cols={4} />
              <TableRowSkeleton cols={4} />
              <TableRowSkeleton cols={4} />
              <TableRowSkeleton cols={4} />
              <TableRowSkeleton cols={4} />
              <TableRowSkeleton cols={4} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton cols={4} />
              <TableRowSkeleton cols={4} />
              <TableRowSkeleton cols={4} />
              <TableRowSkeleton cols={4} />
              <TableRowSkeleton cols={4} />
              <TableRowSkeleton cols={4} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const QuickUserViewSkeleton = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      <div className={`${shimmer} flex items-center gap-3 px-2`}>
        <span className="bg-gray-200 w-10 h-8 rounded-full"></span>
        <span className="flex-grow bg-gray-200 rounded-lg p-3"></span>
      </div>
      <div className={`${shimmer} flex items-center gap-3 px-2`}>
        <span className="bg-gray-200 w-10 h-8 rounded-full"></span>
        <span className="flex-grow bg-gray-200 rounded-lg p-3"></span>
      </div>
      <div className={`${shimmer} flex items-center gap-3 px-2`}>
        <span className="bg-gray-200 w-10 h-8 rounded-full"></span>
        <span className="flex-grow bg-gray-200 rounded-lg p-3"></span>
      </div>
    </div>
  );
};

export const InputFieldSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`${shimmer} p-4 border-2 border-gray-200 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export const TextFieldSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={`${shimmer} rounded-lg p-3 bg-gray-200 ${className}`}></div>
  );
};

export const QuickVaultViewSkeleton = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      <div className={`${shimmer} flex items-center gap-3 px-2`}>
        <span className="bg-gray-200 w-10 h-8 rounded-full"></span>
        <span className="flex-grow bg-gray-200 rounded-lg p-3"></span>
      </div>
    </div>
  );
};

export const LoanDetailsSkelleton = () => {
  return (
    <div className="p-4">
      <div className={`${shimmer} w-56 rounded-lg p-3 bg-gray-200`}></div>
      <div className="flex justify-end gap-4">
        <button
          className={`${shimmer} w-48 p-3 bg-gray-200 rounded-lg`}
        ></button>
        <div className={`${shimmer} w-48 p-3 bg-gray-200 rounded-lg`}></div>
      </div>
      <div className="grid gap-3 py-4">
        <div className=" px-4 py-2 bg-white shadow duration-300 cursor-pointer">
          <div className={`${shimmer} w-32 bg-gray-200 p-3 rounded-lg`}></div>
          <QuickUserViewSkeleton
            className={`${shimmer} grid grid-cols-3 mt-2`}
          />
        </div>
        <div className=" px-4 py-2 bg-white shadow duration-300 cursor-pointer">
          <div className={`${shimmer} w-32 bg-gray-200 p-3 rounded-lg`}></div>
          <QuickUserViewSkeleton
            className={`${shimmer} grid grid-cols-3 mt-2`}
          />
        </div>
        <div className=" px-4 py-2 bg-white shadow duration-300 cursor-pointer">
          <div className={`${shimmer} w-32 bg-gray-200 p-3 rounded-lg`}></div>
          <QuickVaultViewSkeleton className="mt-2" />
        </div>
      </div>
      <div className="px-2 py-4 border-2">
        <div className="flex justify-between py-4">
          <div className={`${shimmer} w-56 rounded-lg p-3 bg-gray-200`}></div>
          <div className={`${shimmer} w-48 p-3 bg-gray-200 rounded-lg`}></div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="grid gap-2">
            <div className={`${shimmer} w-48 p-2 bg-gray-200 rounded-lg`}></div>
            <div
              className={`${shimmer} p-4 border-2 border-gray-200 rounded-lg`}
            ></div>
          </div>
          <div className="grid gap-2">
            <div className={`${shimmer} w-48 p-2 bg-gray-200 rounded-lg`}></div>
            <div
              className={`${shimmer} p-4 border-2 border-gray-200 rounded-lg`}
            ></div>
          </div>

          <div className="grid gap-2">
            <div className={`${shimmer} w-48 p-2 bg-gray-200 rounded-lg`}></div>
            <div
              className={`${shimmer} p-4 border-2 border-gray-200 rounded-lg`}
            ></div>
          </div>

          <div className="grid gap-2">
            <div className={`${shimmer} w-48 p-2 bg-gray-200 rounded-lg`}></div>
            <div
              className={`${shimmer} p-4 border-2 border-gray-200 rounded-lg`}
            ></div>
          </div>

          <div className="grid gap-2">
            <div className={`${shimmer} w-48 p-2 bg-gray-200 rounded-lg`}></div>
            <div
              className={`${shimmer} p-4 border-2 border-gray-200 rounded-lg`}
            ></div>
          </div>

          <div className="flex xl:grid xl:grid-cols-3 items-end gap-2 xl:col-span-3">
            <div className="hidden xl:block"></div>
            <div
              className={`${shimmer} p-4 w-full bg-gray-200 rounded-lg`}
            ></div>
            <div
              className={`${shimmer} p-4 w-full bg-gray-200 rounded-lg`}
            ></div>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="bg-white shadow p-6">
          <div className="flex justify-between items-start py-4">
            <div className={`${shimmer} w-56 rounded-lg p-4 bg-gray-200`}></div>
            <div className={`${shimmer} w-32 p-6 bg-gray-200 rounded-lg`}></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {new Array(12).fill(0).map((_, idx) => (
              <div key={idx} className="grid gap-2">
                <div
                  className={`${shimmer} p-3 w-56 bg-gray-200 rounded-lg`}
                ></div>
                <div
                  style={{
                    width: `${5 + (Math.ceil(Math.random() * 100) % 10)}rem`,
                  }}
                  className={`${shimmer} p-2 bg-gray-200 rounded-lg`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoanCollectionsSkeleton = () => {
  return (
    <div className="grow">
      <div className="ring-4 ring-gray-200/50 p-4 bg-gray-50">
        <TextFieldSkeleton className="w-56" />

        <div className="flex flex-col">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  <TextFieldSkeleton className="p-3" />
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  <TextFieldSkeleton className="p-3" />
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  <TextFieldSkeleton className="p-3" />
                </th>
              </tr>
            </thead>
            <tbody>
              {new Array(10).fill(0).map((_, idx) => (
                <TableRowSkeleton cols={3} key={idx} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6">
          <div className="flex items-center gap-4">
            <InputFieldSkeleton className="w-12" />
            <TextFieldSkeleton className="w-14" />
          </div>
          <div className="flex justify-center gap-2">
            {new Array(6).fill(0).map((_, idx) => (
              <InputFieldSkeleton
                className="w-8 h-8 p-0 flex justify-center items-center"
                key={idx}
              >
                <TextFieldSkeleton className="p-1" />
              </InputFieldSkeleton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
