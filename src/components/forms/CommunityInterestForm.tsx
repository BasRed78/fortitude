'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useParams } from 'next/navigation';

const schema = z.object({
  email: z.string().email('Vul een geldig e-mailadres in'),
  name: z.string().optional(),
  role: z.string().optional(),
  consent_given: z.boolean().refine((v) => v === true, {
    message: 'Toestemming is vereist',
  }),
  website: z.string().max(0).optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

export default function CommunityInterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const params = useParams();
  const locale = (params.locale as string) || 'nl';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { consent_given: false },
  });

  async function onSubmit(data: FormData) {
    setError('');
    try {
      const res = await fetch('/api/community-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      });

      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setError(
        locale === 'nl'
          ? 'Er ging iets mis. Probeer het opnieuw.'
          : 'Something went wrong. Please try again.'
      );
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-[var(--green)]/20 bg-[var(--green)]/5 p-8 text-center">
        <p className="font-sans text-lg font-semibold text-[var(--green)]">
          {locale === 'nl' ? 'Bedankt!' : 'Thank you!'}
        </p>
        <p className="mt-2 text-sm opacity-60">
          {locale === 'nl'
            ? 'We houden je op de hoogte.'
            : "We'll keep you updated."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* Email (required) */}
      <div>
        <label htmlFor="ci-email" className="mb-2 block text-sm font-medium">
          E-mail <span className="text-[var(--red)]">*</span>
        </label>
        <input
          id="ci-email"
          type="email"
          {...register('email')}
          className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[var(--blue)]"
          placeholder={locale === 'nl' ? 'je@email.nl' : 'you@email.com'}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-[var(--red)]">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Name (optional) */}
      <div>
        <label htmlFor="ci-name" className="mb-2 block text-sm font-medium">
          Naam <span className="text-sm opacity-40">(optioneel)</span>
        </label>
        <input
          id="ci-name"
          type="text"
          {...register('name')}
          className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[var(--blue)]"
        />
      </div>

      {/* Role (optional dropdown) */}
      <div>
        <label htmlFor="ci-role" className="mb-2 block text-sm font-medium">
          Ik ben <span className="text-sm opacity-40">(optioneel)</span>
        </label>
        <select
          id="ci-role"
          {...register('role')}
          className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[var(--blue)]"
          defaultValue=""
        >
          <option value="" disabled>
            {locale === 'nl' ? 'Selecteer...' : 'Select...'}
          </option>
          <option value="professional">
            {locale === 'nl' ? 'Professional' : 'Professional'}
          </option>
          <option value="supporter">Supporter</option>
          <option value="ervaringsdeskundige">
            {locale === 'nl' ? 'Ervaringsdeskundige' : 'Person with lived experience'}
          </option>
          <option value="other">
            {locale === 'nl' ? 'Anders' : 'Other'}
          </option>
        </select>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="ci-consent"
          type="checkbox"
          {...register('consent_given')}
          className="mt-1 h-4 w-4 shrink-0 rounded border-black/20 accent-[var(--blue)]"
        />
        <label htmlFor="ci-consent" className="text-sm leading-relaxed opacity-60">
          {locale === 'nl'
            ? 'Ik geef toestemming om mijn gegevens te verwerken voor communicatie over Fortitude.'
            : 'I consent to having my data processed for communication about Fortitude.'}
        </label>
      </div>
      {errors.consent_given && (
        <p className="-mt-3 text-sm text-[var(--red)]">
          {errors.consent_given.message}
        </p>
      )}

      {/* Honeypot */}
      <input
        type="text"
        {...register('website')}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {error && (
        <p className="text-sm text-[var(--red)]">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-[var(--black)] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:cursor-wait disabled:opacity-50"
      >
        {isSubmitting
          ? locale === 'nl'
            ? 'Verzenden...'
            : 'Submitting...'
          : locale === 'nl'
            ? 'Ik ben geïnteresseerd'
            : "I'm interested"}
      </button>
    </form>
  );
}
