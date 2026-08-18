import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { additionalRoles, experience } from '@/data/experience';
import type { ExperienceItem } from '@/data/experience';
import { useLang } from '@/i18n/LanguageContext';

const categories = ['All', 'Professional', 'Leadership', 'Academic', 'Research'] as const;
type Category = (typeof categories)[number];

const categoryColors: Record<string, string> = {
  Professional: 'bg-cyan text-ink',
  Leadership: 'bg-ink text-white',
  Academic: 'border border-cyan text-cyan',
  Research: 'border border-line text-muted',
};

export function Experience() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Category>('All');
  const [showAdditional, setShowAdditional] = useState(false);

  const filtered = filter === 'All' ? experience : experience.filter((item) => item.category === filter);

  return (
    <main>
      <PageHeader eyebrow={t('experience.eyebrow')} title={t('experience.title')} highlight={t('experience.titleHighlight')}>
        <p>{t('experience.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 text-xs uppercase tracking-[0.12em] transition-colors ${filter === cat ? 'bg-ink text-white' : 'border border-line text-muted hover:border-cyan hover:text-cyan'}`}>
                {cat === 'All' ? t('experience.all') : cat}
              </button>
            ))}
          </div>

          <div className="mt-12 max-w-4xl">
            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-px bg-line lg:left-8" />
              <div className="space-y-8">
                {filtered.map((item: ExperienceItem) => (
                  <div key={item.id} className="relative pl-20 lg:pl-24">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-cyan bg-paper lg:h-16 lg:w-16">
                      <span className="font-mono text-xs text-cyan">{item.period.split('–')[0].slice(-2)}</span>
                    </div>
                    <div className="border-b border-line pb-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm text-cyan">{item.period}</span>
                        <span className={`px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] ${categoryColors[item.category]}`}>{item.category}</span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl">{item.role}</h3>
                      <p className="mt-2 text-sm text-muted">{item.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl">
            <button onClick={() => setShowAdditional(!showAdditional)} className="flex w-full items-center justify-between border border-line bg-ivory px-6 py-5 text-sm font-medium transition-colors hover:border-cyan" aria-expanded={showAdditional}>
              <span>{t('experience.additional')} ({additionalRoles.length})</span>
              <ChevronDown size={20} data-flip-rtl className={`text-cyan transition-transform ${showAdditional ? 'rotate-180' : ''}`} />
            </button>
            {showAdditional && (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {additionalRoles.map((role) => (
                  <div key={role} className="border border-line bg-paper p-4 text-sm text-muted">{role}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
