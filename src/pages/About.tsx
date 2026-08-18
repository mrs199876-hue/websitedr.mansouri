import { BriefcaseBusiness, Scale, ShieldCheck, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { profile } from '@/data/profile';
import { useLang } from '@/i18n/LanguageContext';

export function About() {
  const { t } = useLang();

  return (
    <main>
      <PageHeader eyebrow={t('about.eyebrow')} title={t('about.title')} highlight={t('about.titleHighlight')}>
        <p>{profile.summary}</p>
      </PageHeader>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <p className="text-xl leading-8 text-ink/80">{t('about.focus')}</p>
            <p className="mt-6 leading-7 text-muted">{t('about.approach')}</p>
          </div>
          <div className="space-y-4">
            <div className="border border-line bg-ivory p-6">
              <p className="eyebrow">{t('about.coreIdentity')}</p>
              <p className="mt-4 font-display text-2xl">{t('about.coreIdentityValue')}</p>
              <p className="mt-3 text-sm text-muted">{t('about.coreIdentityDesc')}</p>
            </div>
            <div className="border border-line bg-ivory p-6">
              <p className="eyebrow">{t('about.employment')}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{t('about.employmentSub')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-cyan">{t('about.distinctEyebrow')}</p>
          <h2 className="section-title mt-5 text-white">{t('about.distinctTitle')}<br /><span className="text-cyan">{t('about.distinctHighlight')}</span></h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
            <div className="border border-white/15 p-8">
              <Scale className="text-cyan" size={32} />
              <h3 className="mt-8 font-display text-3xl">{t('about.judiciary')}</h3>
              <p className="mt-4 text-sm leading-6 text-white/50">{t('about.expertiseSince')}</p>
            </div>
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.15em] text-white/40">{t('about.expertiseLabel')}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {profile.judiciaryExpertise.map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-white/70"><ShieldCheck size={16} className="text-cyan" /> {item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">{t('about.pillarsEyebrow')}</p>
          <h2 className="section-title mt-5">{t('about.pillarsTitle')}<br /><span className="text-cyan">{t('about.pillarsHighlight')}</span></h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { icon: Sparkles, title: t('about.pillar1'), text: t('about.pillar1Text') },
              { icon: BriefcaseBusiness, title: t('about.pillar2'), text: t('about.pillar2Text') },
              { icon: Scale, title: t('about.pillar3'), text: t('about.pillar3Text') },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="border border-line bg-paper p-8">
                  <Icon className="text-cyan" size={28} />
                  <h3 className="mt-8 font-display text-2xl">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
