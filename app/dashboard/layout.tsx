import { SizeNav } from "../ui/dashboard/side-nav";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex bg-gray-100">
      <div className="flex">
        <SizeNav />
      </div>
      <div className="grow overflow-auto flex">{children}</div>
    </div>
  );
}
