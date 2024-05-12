import { apis } from "@/app/lib/apis";
import { countEntities } from "@/app/lib/data";
import ClientsTable from "@/app/ui/clients/clients-table";

export default async function Clients() {
  const numberOfClients = await countEntities(apis.clients.count);

  return (
    <div>
      <ClientsTable count={numberOfClients.count} />
    </div>
  );
}
