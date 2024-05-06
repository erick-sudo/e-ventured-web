import { fetchLoanById } from '@/app/lib/data';
import { FullLoanOut } from '@/app/lib/definitions';
import EditLoanForm from '@/app/ui/loans/edit-loan';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
  
    const loan: FullLoanOut | null = await fetchLoanById(id);
  
    if (!loan) {
      notFound();
    }
  
    return (
      <main>
        <EditLoanForm loan={loan.loan} info={loan.info} />
      </main>
    );
  }