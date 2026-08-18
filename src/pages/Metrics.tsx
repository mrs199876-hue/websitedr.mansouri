import { ExternalLink } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { impactStats, profile } from '@/data/profile';
import { useLang } from '@/i18n/LanguageContext';

export function Metrics() {
  const { t } = useLang();
  const academicMetrics = impactStats.filter((s) => s.type === 'academic');
  const professionalMetrics = impactStats.filter((s) => s.type === 'professional');
  const impactMetrics = impactStats.filter((s) => s.type === 'impact');

  const groups = [
    { label: t('metrics.academic'), items: academicMetrics, note: t('metrics.academicNote') },
    { label: t('metrics.professional'), items: professionalMetrics, note: t('metrics.professionalNote') },
    { label: t('metrics.impact'), items: impactMetrics, note: t('metrics.impactNote') },
  ];

  return (
    <main>
      <PageHeader eyebrow={t('metrics.eyebrow')} title={t('metrics.title')} highlight={t('metrics.titleHighlight')}>
        <p>{t('metrics.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="space-y-16">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="eyebrow">{group.label}</p>
                <p className="mt-3 text-sm text-muted">{group.note}</p>
                <div className="mt-8 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
                  {group.items.map((stat) => (
                    <div key={stat.label} className="border-b border-r border-line p-8">
                      <p className="font-display text-5xl tracking-[-0.05em] text-ink">{stat.value}</p>
                      <p className="mt-4 text-sm leading-5 text-muted">{stat.label}</p>
                      {stat.note && <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-cyan">{stat.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-cyan">{t('metrics.verifyEyebrow')}</p>
          <h2 className="section-title mt-5 text-white">{t('metrics.verifyTitle')}<br /><span className="text-cyan">{t('metrics.verifyHighlight')}</span></h2>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href={profile.googleScholar} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-cyan/40 px-6 py-4 text-xs font-semibold uppercase tracking-[0.13em] text-cyan transition-colors hover:bg-cyan hover:text-ink">{t('metrics.googleScholar')} <ExternalLink size={16} /></a>
            <a href={profile.researchGate} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-white/25 px-6 py-4 text-xs font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:border-cyan hover:text-cyan">{t('metrics.researchGate')} <ExternalLink size={16} /></a>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/50">{t('metrics.integrationNote')}</p>
        </div>
      </section>
    </main>
  );
}
