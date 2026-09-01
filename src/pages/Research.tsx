import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { researchDomains, researchFlow } from '@/data/research';
import { useLang } from '@/i18n/LanguageContext';

export function Research() {
  const { t } = useLang();
  const [activeId, setActiveId] = useState(researchDomains[0].id);
  const active = researchDomains.find((d) => d.id === activeId)!;

  const flowLabels = [t('research.stage'), t('research.stageTech'), t('research.stageGov'), t('research.stageImpact')];
  const flowDescs = [t('research.stageDesc'), t('research.stageTechDesc'), t('research.stageGovDesc'), t('research.stageImpactDesc')];

  return (
    <main>
      <PageHeader eyebrow={t('research.eyebrow')} title={t('research.title')} highlight={t('research.titleHighlight')}>
        <p>{t('research.summary')}</p>
      </PageHeader>

      <section className="bg-ink text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-cyan">{t('research.flowEyebrow')}</p>
          <h2 className="section-title mt-5 text-white">{t('research.flowTitle')}<br /><span className="text-cyan">{t('research.flowHighlight')}</span></h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {researchFlow.map((step, index) => (
              <div key={step.stage} className="relative border border-white/15 p-6">
                <span className="font-mono text-xs text-cyan">0{index + 1}</span>
                <h3 className="mt-4 font-display text-2xl">{flowLabels[index]}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{flowDescs[index]}</p>
                {index < researchFlow.length - 1 && <ChevronRight size={20} data-flip-rtl className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-cyan lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">{t('research.taxonomyEyebrow')}</p>
          <h2 className="section-title mt-5">{t('research.taxonomyTitle')}<br /><span className="text-cyan">{t('research.taxonomyHighlight')}</span></h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div className="space-y-2">
              {researchDomains.map((domain) => (
                <button key={domain.id} onClick={() => setActiveId(domain.id)} className={`flex w-full items-center gap-5 border-b border-line p-5 text-left transition-all ${activeId === domain.id ? 'bg-ink text-white' : 'hover:bg-ivory'}`}>
                  <span className={`text-xs ${activeId === domain.id ? 'text-cyan' : 'text-muted'}`}>{domain.number}</span>
                  <Sparkles size={20} className={activeId === domain.id ? 'text-cyan' : 'text-muted'} />
                  <span className="font-display text-xl">{domain.title}</span>
                  <ArrowRight size={16} data-flip-rtl className={`ml-auto ${activeId === domain.id ? 'text-cyan' : 'text-muted'}`} />
                </button>
              ))}
            </div>

            <div className="relative flex min-h-[400px] flex-col justify-between overflow-hidden bg-ink p-8 text-white lg:p-12">
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full border border-cyan/20" />
              <div className="absolute right-12 top-12 h-48 w-48 rounded-full border border-cyan/20" />
              <div className="relative">
                <span className="text-xs uppercase tracking-[0.2em] text-cyan">{t('research.selectedDomain')} / {active.number}</span>
                <h3 className="mt-6 font-display text-4xl leading-tight">{active.title}</h3>
                <p className="mt-5 max-w-md leading-7 text-white/60">{active.text}</p>
                <div className="mt-8">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.16em] text-white/40">{t('research.topics')}</p>
                  <div className="flex flex-wrap gap-2">
                    {active.topics.map((topic) => <span key={topic} className="border border-cyan/30 px-3 py-1.5 text-xs text-cyan">{topic}</span>)}
                  </div>
                </div>
              </div>
              <div className="relative mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/45"><span className="h-px w-12 bg-cyan" /> {t('home.researchFlow')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-cyan">{t('research.mapEyebrow')}</p>
          <h2 className="section-title mt-5 text-white">{t('research.mapTitle')}<br /><span className="text-cyan">{t('research.mapHighlight')}</span></h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {[
              { domain: 'Artificial Intelligence', steps: ['Cost-Sensitive Decision Tree', 'Research Publication (2025)', 'Intelligent Systems / Data-driven Applications'] },
              { domain: 'Intelligent Transportation', steps: ['Traffic Accident Analysis', 'Publication (2014)', 'Road Safety Research'] },
              { domain: 'Data Governance', steps: ['Data-Driven Governance Program', 'National Project', 'Article 107(p) Implementation'] },
              { domain: 'Cybersecurity', steps: ['Hybrid Intrusion Detection System', 'Publication (2015)', 'Organizational Cyber Defense'] },
            ].map((map) => (
              <div key={map.domain} className="border border-white/15 p-6">
                <p className="font-display text-2xl text-cyan">{map.domain}</p>
                <div className="mt-6 space-y-3">
                  {map.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="font-mono text-xs text-white/40">{i + 1}</span>
                      <ChevronRight size={14} data-flip-rtl className="text-cyan" />
                      <span className="text-sm text-white/70">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
