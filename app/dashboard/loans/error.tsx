"use client";

import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="h-80 flex flex-grow justify-center items-center flex-col gap-4 py-12">
      <div className="text-gray-700">{error?.message}</div>
      <div>
        <Image alt="Void" height={200} width={200} src="/void.svg" />
      </div>
      <button
        className="m-4 rounded-md ring-2 ring-indigo-700 px-4 py-2 text-sm text-indigo-700 transition-colors hover:bg-indigo-700 hover:text-white"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </main>
  );
}
