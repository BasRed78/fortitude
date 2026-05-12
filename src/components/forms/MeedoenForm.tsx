'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const verbindingValues = [
  'aya',
  'naaste',
  'zorgprofessional',
  'onderzoeker',
  'supporter',
  'anders',
] as const;

const verbindingLabels: Record<(typeof verbindingValues)[number], string> = {
  aya: 'AYA',
  naaste: 'Naaste',
  zorgprofessional: 'Zorgprofessional',
  onderzoeker: 'Onderzoeker',
  supporter: 'Supporter',
  anders: 'Anders',
};

const schema = z.object({
  naam: z.string().min(1, 'Vul je naam in').max(120),
  email: z.string().email('Vul een geldig e-mailadres in').max(180),
  verbinding: z
    .array(z.enum(verbindingValues))
    .min(1, 'Kies ten minste één optie'),
  bijdrage: z.string().max(2000).optional(),
  interesse_mia_rapport: z.boolean().optional(),
  consent_given: z.boolean().refine((v) => v === true, {
    message: 'Toestemming is vereist',
  }),
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

const FORTITUDE_LINKEDIN = 'https://www.linkedin.com/company/ffortitude/';

const inputClass =
  'w-full border border-[#0A0A0A]/30 bg-white/70 px-3 py-2.5 text-sm text-[#0A0A0A] placeholder:text-[#0A0A0A]/40 outline-none transition-colors focus:border-[#0A0A0A] focus:bg-white';

const labelClass = 'mb-1.5 block text-xs font-medium uppercase tracking-[0.08em] text-[#0A0A0A]/80';
const errorClass = 'mt-1.5 text-xs text-[#8B0000]';

export default function MeedoenForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [aangemeldVia, setAangemeldVia] = useState<string>('direct');
  const searchParams = useSearchParams();

  useEffect(() => {
    const bron = searchParams?.get('bron');
    if (bron) setAangemeldVia(bron);
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      consent_given: false,
      verbinding: [],
      interesse_mia_rapport: false,
    },
  });

  async function onSubmit(data: FormData) {
    setError('');
    try {
      const res = await fetch('/api/meedoen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, aangemeld_via: aangemeldVia }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setError('Er ging iets mis. Probeer het opnieuw.');
    }
  }

  if (submitted) {
    return (
      <div className="border border-[#0A0A0A]/20 bg-white/50 p-6">
        <p className="text-base font-medium text-[#0A0A0A]">Bedankt.</p>
        <p className="mt-2 text-sm leading-relaxed text-[#0A0A0A]/75">
          We melden ons binnen twee weken bij je met een persoonlijk bericht.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#0A0A0A]/75">
          In de tussentijd kun je ons volgen op{' '}
          <a
            href={FORTITUDE_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#0A0A0A] underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="m-naam" className={labelClass}>
          Naam <span className="text-[#0A0A0A]/40">*</span>
        </label>
        <input
          id="m-naam"
          type="text"
          autoComplete="name"
          {...register('naam')}
          className={inputClass}
        />
        {errors.naam && <p className={errorClass}>{errors.naam.message}</p>}
      </div>

      <div>
        <label htmlFor="m-email" className={labelClass}>
          E-mail <span className="text-[#0A0A0A]/40">*</span>
        </label>
        <input
          id="m-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          {...register('email')}
          className={inputClass}
          placeholder="je@email.nl"
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <fieldset>
        <legend className={labelClass}>
          Verbinding met Fortitude <span className="text-[#0A0A0A]/40">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-1.5">
          {verbindingValues.map((value) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-2 border border-[#0A0A0A]/30 bg-white/70 px-3 py-2 text-xs text-[#0A0A0A] transition-colors hover:border-[#0A0A0A]/60 has-[:checked]:border-[#0A0A0A] has-[:checked]:bg-[#0A0A0A] has-[:checked]:text-white"
            >
              <input
                type="checkbox"
                value={value}
                {...register('verbinding')}
                className="h-3.5 w-3.5 shrink-0 accent-[#0A0A0A]"
              />
              <span>{verbindingLabels[value]}</span>
            </label>
          ))}
        </div>
        {errors.verbinding && <p className={errorClass}>{errors.verbinding.message}</p>}
      </fieldset>

      <div>
        <label htmlFor="m-bijdrage" className={labelClass}>
          Bijdrage <span className="text-[#0A0A0A]/40">(optioneel)</span>
        </label>
        <textarea
          id="m-bijdrage"
          rows={3}
          {...register('bijdrage')}
          className={`${inputClass} resize-y leading-relaxed`}
        />
      </div>

      <div className="flex items-start gap-2.5">
        <input
          id="m-mia"
          type="checkbox"
          {...register('interesse_mia_rapport')}
          className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#0A0A0A]"
        />
        <label htmlFor="m-mia" className="text-xs leading-relaxed text-[#0A0A0A]/75">
          Ik ontvang graag het Masculinities in Action-onderzoeksrapport zodra
          het beschikbaar is.
        </label>
      </div>

      <div className="flex items-start gap-2.5">
        <input
          id="m-consent"
          type="checkbox"
          {...register('consent_given')}
          className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#0A0A0A]"
        />
        <label htmlFor="m-consent" className="text-xs leading-relaxed text-[#0A0A0A]/75">
          Ik geef toestemming dat Fortitude mijn gegevens bewaart om contact
          met mij op te nemen.
        </label>
      </div>
      {errors.consent_given && <p className={errorClass}>{errors.consent_given.message}</p>}

      <input
        type="text"
        {...register('website')}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {error && <p className={errorClass}>{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 inline-flex items-center justify-center bg-[#0A0A0A] px-6 py-3 text-xs font-medium uppercase tracking-[0.1em] text-[#F5F5F5] transition-opacity duration-200 hover:opacity-85 disabled:cursor-wait disabled:opacity-50"
      >
        {isSubmitting ? 'Verzenden...' : 'Doe mee'}
      </button>
    </form>
  );
}
