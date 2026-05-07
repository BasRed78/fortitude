'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-sans text-[length:var(--font-display)] font-medium tracking-tight">
        500
      </h1>
      <p className="mt-4 text-lg opacity-50">
        Er ging iets mis.
      </p>
      <div className="mt-8">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-lg bg-[var(--black)] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
        >
          Probeer opnieuw
        </button>
      </div>
    </section>
  );
}
