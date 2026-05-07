import { ButtonLink } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-sans text-[length:var(--font-display)] font-medium tracking-tight">
        404
      </h1>
      <p className="mt-4 text-lg opacity-50">
        Deze pagina bestaat niet.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" variant="primary" size="md">
          Terug naar home
        </ButtonLink>
      </div>
    </section>
  );
}
