import { GraduationCap, Award } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { education } from '@/data/education';
import { useLang } from '@/i18n/LanguageContext';

function getLevelLabel(level: string, t: (key: string) => string): string {
  if (level.includes('Doctoral')) return t('education.doctoral');
  if (level.includes('Master')) return t('education.masters');
  return t('education.bachelors');
}

export function Education() {
  const { t } = useLang();

  return (
    <main>
      <PageHeader eyebrow={t('education.eyebrow')} title={t('education.title')} highlight={t('education.titleHighlight')}>
        <p>{t('education.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-px bg-line lg:left-8" />
            <div className="space-y-12">
              {education.map((item, index) => {
                const isThesis = item.level.includes('Doctoral') || item.level.includes('Master');
                const thesisLabel = isThesis ? t('education.dissertation') : t('education.project');

                return (
                  <div key={item.id} className="relative pl-20 lg:pl-24">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-cyan bg-paper text-cyan lg:h-16 lg:w-16">
                      <GraduationCap size={20} />
                    </div>
                    <div className="border border-line bg-ivory p-8">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.16em] text-cyan">{item.period}</span>
                        <span className="font-mono text-xs text-muted">0{index + 1}</span>
                      </div>
                      <h3 className="mt-4 font-display text-3xl">{getLevelLabel(item.level, t)}</h3>
                      <p className="mt-3 text-sm font-medium">{t('education.field')}</p>
                      <p className="mt-1 text-sm text-muted">{t('education.spec')}: {item.specialization}</p>
                      <div className="mt-6 border-t border-line pt-6">
                        <p className="eyebrow">{thesisLabel}</p>
                        <p className="mt-3 text-lg leading-7 text-ink/80">{item.title}</p>
                      </div>
                      {item.result && (
                        <div className="mt-6 flex items-center gap-2 text-sm text-cyan"><Award size={16} /> {t('education.excellent')}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
