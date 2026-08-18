import { BriefcaseBusiness, ChevronRight, FileText, Microscope, Network } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { digitalProjects, researchProjects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { useLang } from '@/i18n/LanguageContext';

const phaseKeys = ['challenge', 'context', 'role', 'solution', 'method', 'scale', 'result'] as const;

export function Projects() {
  const { t } = useLang();
  const [tab, setTab] = useState<'research' | 'digital'>('research');
  const [expanded, setExpanded] = useState<string | null>(null);
  const projects = tab === 'research' ? researchProjects : digitalProjects;

  return (
    <main>
      <PageHeader eyebrow={t('projects.eyebrow')} title={t('projects.title')} highlight={t('projects.titleHighlight')}>
        <p>{t('projects.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex gap-2 border-b border-line">
            <button onClick={() => setTab('research')} className={`flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${tab === 'research' ? 'border-b-2 border-cyan text-cyan' : 'text-muted hover:text-ink'}`}>
              <Microscope size={16} /> {t('projects.research')} ({researchProjects.length})
            </button>
            <button onClick={() => setTab('digital')} className={`flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${tab === 'digital' ? 'border-b-2 border-cyan text-cyan' : 'text-muted hover:text-ink'}`}>
              <Network size={16} /> {t('projects.digital')} ({digitalProjects.length})
            </button>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project: Project, index) => (
              <article key={project.id} className="border border-line bg-ivory p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-cyan">
                    {tab === 'research' ? <Microscope size={22} /> : <BriefcaseBusiness size={22} />}
                    <span className="text-[10px] uppercase tracking-[0.18em]">{tab === 'research' ? t('projects.research') : t('projects.digital')} / {String(index + 1).padStart(2, '0')}</span>
                  </div>
                  {project.basis && <span className="text-[10px] uppercase tracking-[0.14em] text-muted">{project.basis}</span>}
                </div>
                <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
                <p className="mt-4 text-sm text-muted">{project.organization}</p>
                <div className="mt-6 border-t border-line pt-6">
                  <p className="eyebrow">{t('projects.role')}</p>
                  <p className="mt-2 text-sm font-medium text-cyan">{project.role}</p>
                </div>
                <button onClick={() => setExpanded(expanded === project.id ? null : project.id)} className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-cyan" aria-expanded={expanded === project.id}>
                  {expanded === project.id ? t('projects.hideDetails') : t('projects.viewCase')} <ChevronRight size={14} data-flip-rtl className={`transition-transform ${expanded === project.id ? 'rotate-90' : ''}`} />
                </button>
                {expanded === project.id && (
                  <div className="mt-6 space-y-5 border-t border-line pt-6">
                    {phaseKeys.map((phase) => {
                      const value = project[phase as keyof Project];
                      if (!value) return null;
                      return (
                        <div key={phase}>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-cyan">{t(`projects.${phase}`)}</p>
                          <p className="mt-2 text-sm leading-6 text-muted">{value as string}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12 border border-line bg-ink p-8 text-white">
            <div className="flex items-center gap-3 text-cyan"><FileText size={20} /><span className="text-[10px] uppercase tracking-[0.18em]">Note</span></div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">{t('projects.note')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
