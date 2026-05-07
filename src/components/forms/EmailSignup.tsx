'use client';

import { useState, FormEvent } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeeeeozp';

export default function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setError('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <p className="text-sm text-[#0A0A0A]/85">
        Bedankt! We houden je op de hoogte.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="email"
        name="email"
        required
        placeholder="Je e-mailadres"
        className="flex-1 border border-[#0A0A0A]/30 bg-white/70 px-4 py-2.5 text-sm text-[#0A0A0A] placeholder:text-[#0A0A0A]/40 outline-none transition-colors focus:border-[#0A0A0A] focus:bg-white"
      />
      <button
        type="submit"
        disabled={submitting}
        className="border-2 border-[#0A0A0A] bg-transparent px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[#0A0A0A] transition-colors duration-200 hover:bg-[#0A0A0A] hover:text-[#F5F5F5] disabled:cursor-wait disabled:opacity-60"
      >
        {submitting ? 'Verzenden...' : 'Blijf op de hoogte'}
      </button>
      {error && (
        <p className="mt-1 w-full text-xs text-[#8B0000] sm:mt-0">{error}</p>
      )}
    </form>
  );
}
