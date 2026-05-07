'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useParams } from 'next/navigation';

const schema = z.object({
  name: z.string().min(1, 'Vul je naam in'),
  email: z.string().email('Vul een geldig e-mailadres in'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Vul een bericht in'),
  website: z.string().max(0).optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
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
  });

  async function onSubmit(data: FormData) {
    setError('');
    try {
      const res = await fetch('/api/contact', {
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
          {locale === 'nl' ? 'Verstuurd!' : 'Sent!'}
        </p>
        <p className="mt-2 text-sm opacity-60">
          {locale === 'nl'
            ? 'We nemen zo snel mogelijk contact met je op.'
            : "We'll get back to you as soon as possible."}
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[var(--blue)]';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <label htmlFor="c-name" className="mb-2 block text-sm font-medium">
          Naam <span className="text-[var(--red)]">*</span>
        </label>
        <input id="c-name" type="text" {...register('name')} className={inputClass} />
        {errors.name && (
          <p className="mt-1 text-sm text-[var(--red)]">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="c-email" className="mb-2 block text-sm font-medium">
          E-mail <span className="text-[var(--red)]">*</span>
        </label>
        <input id="c-email" type="email" {...register('email')} className={inputClass} />
        {errors.email && (
          <p className="mt-1 text-sm text-[var(--red)]">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="c-subject" className="mb-2 block text-sm font-medium">
          Onderwerp <span className="text-sm opacity-40">(optioneel)</span>
        </label>
        <input id="c-subject" type="text" {...register('subject')} className={inputClass} />
      </div>

      <div>
        <label htmlFor="c-message" className="mb-2 block text-sm font-medium">
          Bericht <span className="text-[var(--red)]">*</span>
        </label>
        <textarea
          id="c-message"
          rows={6}
          {...register('message')}
          className={`${inputClass} resize-y`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-[var(--red)]">{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot */}
      <input
        type="text"
        {...register('website')}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {error && <p className="text-sm text-[var(--red)]">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-[var(--black)] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:cursor-wait disabled:opacity-50"
      >
        {isSubmitting
          ? locale === 'nl' ? 'Verzenden...' : 'Sending...'
          : locale === 'nl' ? 'Verstuur' : 'Send'}
      </button>
    </form>
  );
}
