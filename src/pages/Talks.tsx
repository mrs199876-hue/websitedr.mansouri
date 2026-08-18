import { Filter } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { talkCategories, talksTopics } from '@/data/teaching';
import { useLang } from '@/i18n/LanguageContext';

export function Talks() {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <main>
      <PageHeader eyebrow={t('talks.eyebrow')} title={t('talks.title')} highlight={t('talks.titleHighlight')}>
        <p>{t('talks.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-3 text-muted"><Filter size={16} /><span className="text-xs uppercase tracking-[0.14em]">{t('talks.filter')}</span></div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => setActiveCategory('All')} className={`px-4 py-2 text-xs uppercase tracking-[0.12em] transition-colors ${activeCategory === 'All' ? 'bg-ink text-white' : 'border border-line text-muted hover:border-cyan hover:text-cyan'}`}>{t('experience.all')}</button>
            {talkCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 text-xs uppercase tracking-[0.12em] transition-colors ${activeCategory === cat ? 'bg-ink text-white' : 'border border-line text-muted hover:border-cyan hover:text-cyan'}`}>{cat}</button>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {talksTopics.map((topic, index) => (
              <article key={topic} className="group border border-line bg-ivory p-6 transition-colors hover:border-cyan">
                <span className="font-mono text-xs text-cyan">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-xl leading-snug">{topic}</h3>
                <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-muted">{activeCategory === 'All' ? 'Talk / Workshop' : activeCategory}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted">Detailed talk metadata (date, venue, audience) will be populated as verified information becomes available.</p>
        </div>
      </section>
    </main>
  );
}
