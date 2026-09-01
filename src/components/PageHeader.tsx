import type { ReactNode } from 'react';
import { useLang } from '@/i18n/LanguageContext';

export function PageHeader({ eyebrow, title, highlight, children }: { eyebrow: string; title: string; highlight?: string; children?: ReactNode }) {
  return (
    <section className="bg-paper pt-32 pb-12 lg:pt-44 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="section-title mt-5">
          {title}
          {highlight && <><br /><span className="text-cyan">{highlight}</span></>}
        </h1>
        {children && <div className="mt-8 max-w-2xl text-lg leading-8 text-ink/70">{children}</div>}
      </div>
    </section>
  );
}

export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-cyan">
      <span className="font-mono">{number}</span>
      <span className="h-px w-8 bg-cyan" />
      <span className="text-muted">{children}</span>
    </div>
  );
}

export function useT() {
  const { t } = useLang();
  return t;
}
