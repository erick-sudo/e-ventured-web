import {
  InputFieldSkeleton,
  TableRowSkeleton,
  TextFieldSkeleton,
} from "@/app/ui/skeletons";

export default function Loading() {
  return (
    <div className="my-6 grow">
      <div className="ring-4 ring-gray-200/50 p-4 bg-gray-50">
        <TextFieldSkeleton className="w-56" />

        <div className=" flex flex-col">
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
                <th scope="col" className="px-3 py-5 font-medium">
                  <TextFieldSkeleton className="p-3" />
                </th>
                <th scope="col" className="px-4 py-5 font-medium">
                  <TextFieldSkeleton className="p-3" />
                </th>
                <th scope="col" className="px-4 py-5 font-medium">
                  <TextFieldSkeleton className="p-3" />
                </th>
              </tr>
            </thead>
            <tbody>
              {new Array(10).fill(0).map((_, idx) => (
                <TableRowSkeleton cols={6} key={idx} />
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
                className="w-10 h-10 p-0 flex justify-center items-center"
                key={idx}
              >
                <TextFieldSkeleton className="py-2 px-1" />
              </InputFieldSkeleton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
