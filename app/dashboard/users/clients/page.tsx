import { apis } from "@/app/lib/apis";
import { countEntities } from "@/app/lib/data";
import ClientsTable from "@/app/ui/clients/clients-table";
import { Suspense } from "react";

export default async function Clients() {
  const numberOfClients = await countEntities(apis.clients.count);

  return (
    <Suspense fallback={<div className="">Loading...</div>}>
      <div>
        <ClientsTable count={numberOfClients.count} />
      </div>
    </Suspense>
  );
}
