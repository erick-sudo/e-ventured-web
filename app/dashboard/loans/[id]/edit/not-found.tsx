import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="flex flex-grow h-80 flex-col items-center justify-center gap-2">
      <div>
        <Image alt="Not found" height={200} width={200} src="/page_not_found.svg" />
      </div>
      <h2 className="text-xl font-semibold">Not Found</h2>
      <p>Could not find the requested loan.</p>
      <Link
        href="/dashboard/loans"
        className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm text-white transition-colors hover:bg-indigo-400"
      >
        Go Back
      </Link>
    </main>
  );
}
