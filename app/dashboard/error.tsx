"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-white rounded-md grow m-4 flex justify-center items-center flex-col">
      <div className="text-gray-700">{error?.message}</div>
      <div></div>
      <button
        className="m-4 rounded-md ring-2 ring-lime-700 px-4 py-2 text-sm text-lime-700 transition-colors hover:bg-lime-700 hover:text-white"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </main>
  );
}
