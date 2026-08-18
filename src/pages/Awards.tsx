import { Award, Trophy } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { awards, commendationSummary } from '@/data/awards';
import { useLang } from '@/i18n/LanguageContext';

export function Awards() {
  const { t } = useLang();

  return (
    <main>
      <PageHeader eyebrow={t('awards.eyebrow')} title={t('awards.title')} highlight={t('awards.titleHighlight')}>
        <p>{t('awards.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-px bg-line lg:left-8" />
            <div className="space-y-8">
              {awards.map((award) => (
                <div key={award.id} className="relative pl-20 lg:pl-24">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-cyan bg-paper text-cyan lg:h-16 lg:w-16">
                    <Trophy size={20} />
                  </div>
                  <div className="border border-line bg-ivory p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.16em] text-cyan">{award.year} (Persian calendar)</span>
                      <Award size={16} className="text-cyan" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl">{award.title}</h3>
                    <p className="mt-2 text-sm text-muted">{award.context}</p>
                    {award.description && (
                      <div className="mt-6 border-t border-line pt-6">
                        <p className="eyebrow">{t('awards.idea')}</p>
                        <p className="mt-3 text-sm leading-7 text-ink/80">{award.description}</p>
                        <p className="mt-3 text-xs text-muted">{t('awards.ideaNote')}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-cyan">{t('awards.commendationEyebrow')}</p>
          <h2 className="section-title mt-5 text-white">{t('awards.commendationTitle')}<br /><span className="text-cyan">{t('awards.commendationHighlight')}</span></h2>
          <div className="mt-12 grid gap-4 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-r border-white/10 p-8"><p className="font-display text-5xl text-cyan">{commendationSummary.total}</p><p className="mt-4 text-sm text-white/60">{t('awards.total')}</p></div>
            <div className="border-b border-r border-white/10 p-8"><p className="font-display text-5xl text-white">{commendationSummary.firstVicePresident}</p><p className="mt-4 text-sm text-white/60">{t('awards.fromVP')}</p></div>
            <div className="border-b border-r border-white/10 p-8"><p className="font-display text-5xl text-white">{commendationSummary.vicePresidents}</p><p className="mt-4 text-sm text-white/60">{t('awards.fromVPs')}</p></div>
            <div className="border-b border-r border-white/10 p-8"><p className="font-display text-5xl text-white">{commendationSummary.minister}</p><p className="mt-4 text-sm text-white/60">{t('awards.fromMinister')}</p></div>
          </div>
        </div>
      </section>

      <section className="bg-cyan text-ink py-12 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 lg:px-10">
          <p className="font-display text-2xl">Scientific events & leadership roles documented in the full profile.</p>
          <span className="text-xs uppercase tracking-[0.15em] text-ink/60">Scientific Secretary · Jury Chair · Reviewer · Festival Secretary</span>
        </div>
      </section>
    </main>
  );
}
