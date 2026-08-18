import { ArrowDownRight, ArrowRight, BookOpen, BriefcaseBusiness, ChevronDown, ExternalLink, GraduationCap, Network, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { impactStats, profile } from '@/data/profile';
import { researchDomains } from '@/data/research';
import { publications } from '@/data/publications';
import { useLang } from '@/i18n/LanguageContext';

const journey = [
  { years: '2022—2025', roleKey: 'home.journey1Role', orgKey: 'home.journey1Org' },
  { years: '2021—2023', roleKey: 'home.journey2Role', orgKey: 'home.journey2Org' },
  { years: '2021—2022', roleKey: 'home.journey3Role', orgKey: 'home.journey3Org' },
  { years: '2009—2016', roleKey: 'home.journey4Role', orgKey: 'home.journey4Org' },
];

const projectPreview = [
  { icon: Network, titleKey: 'home.project1Title', descKey: 'home.project1Desc' },
  { icon: BriefcaseBusiness, titleKey: 'home.project2Title', descKey: 'home.project2Desc' },
  { icon: ShieldCheck, titleKey: 'home.project3Title', descKey: 'home.project3Desc' },
  { icon: Sparkles, titleKey: 'home.project4Title', descKey: 'home.project4Desc' },
];

export function Home() {
  const { t, lang } = useLang();
  const [activeDomain, setActiveDomain] = useState(0);

  return (
    <main id="home">
      <section className="relative overflow-hidden bg-ink pt-32 text-white lg:pt-44">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-grid opacity-20" />
        <div className="absolute -right-40 top-36 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-10 lg:pb-32">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-cyan"><span className="h-px w-10 bg-cyan" /> {t('hero.eyebrow')}</div>
            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-7xl lg:text-[6.6rem]">{t('hero.title')}<br /><span className="text-cyan">{t('hero.titleHighlight')}</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">{t('hero.summary')}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/research" className="group flex items-center gap-3 bg-cyan px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-1">{t('hero.ctaResearch')} <ArrowRight size={16} data-flip-rtl className="transition-transform group-hover:translate-x-1" /></Link>
              <Link to="/projects" className="flex items-center gap-3 border border-white/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-cyan hover:text-cyan">{t('hero.ctaDigital')} <ArrowDownRight size={16} data-flip-rtl /></Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:justify-self-end">
            <div className="portrait-placeholder aspect-[4/5] border border-cyan/35 bg-[#101d2a] p-5">
              <div className="flex h-full flex-col justify-between border border-white/10 p-5">
                <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-cyan"><span>{t('home.portraitLabel')}</span><span>01</span></div>
                <div className="text-center"><div className="mx-auto mb-5 h-32 w-32 rounded-full border border-cyan/40 bg-cyan/5" /><p className="font-display text-2xl">{t('hero.portrait')}</p><p className="mt-2 text-xs leading-5 text-white/45">{t('hero.portraitNote').split('\n').map((line, i, arr) => (<span key={i}>{line}{i < arr.length - 1 && <br />}</span>))}</p></div>
                <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.16em] text-white/40"><span>{t('home.portraitDomains')}</span><span>MM</span></div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 border border-cyan/40 bg-ink px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-cyan">{t('hero.flowLabel')}</div>
          </div>
        </div>
        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-white/40 lg:px-10">
            <span>{t('hero.scroll')}</span>
            <span className="flex items-center gap-2">{profile.age} · {t('home.roles')} <ChevronDown size={14} data-flip-rtl /></span>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28">
          <div><p className="eyebrow">{t('about.identityEyebrow')}</p><h2 className="section-title mt-5">{t('about.identityTitle')}<br /><span className="text-cyan">{t('about.identityHighlight')}</span></h2></div>
          <div className="max-w-2xl">
            <p className="text-xl leading-8 text-ink/75">{t('about.focus')}</p>
            <p className="mt-6 leading-7 text-muted">{t('about.approach')}</p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <div className="border-l-2 border-cyan pl-4 text-sm font-medium">{t('about.judiciary')}<br /><span className="font-normal text-muted">{t('about.judiciarySub')}</span></div>
              <div className="border-l-2 border-ink/20 pl-4 text-sm font-medium">{t('about.employment')}<br /><span className="font-normal text-muted">{t('about.employmentSub')}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="eyebrow">{t('home.evidenceEyebrow')}</p><h2 className="section-title mt-5">{t('metrics.title')}<br />{t('metrics.titleHighlight')}</h2></div>
            <p className="max-w-xs text-sm leading-6 text-muted">{t('home.evidenceNote')}</p>
          </div>
          <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="border-b border-r border-line p-6 lg:p-8">
                <p className="font-display text-5xl tracking-[-0.05em] text-ink">{stat.value}</p>
                <p className="mt-4 text-sm leading-5 text-muted">{stat.label}</p>
                <p className="mt-6 text-[10px] uppercase tracking-[0.15em] text-cyan">{stat.type}</p>
              </div>
            ))}
          </div>
          <Link to="/metrics" className="link-button mt-8">{t('home.viewAllMetrics')} <ArrowRight size={16} data-flip-rtl /></Link>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="eyebrow">{t('home.researchDomainsEyebrow')}</p><h2 className="section-title mt-5">{t('research.title')}<br /><span className="text-cyan">{t('research.titleHighlight')}</span></h2></div>
            <Link to="/research" className="link-button">{t('home.viewResearchProfile')} <ArrowRight size={16} data-flip-rtl /></Link>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div className="space-y-2">
              {researchDomains.map((domain, index) => {
                const Icon = Sparkles;
                return (
                  <button key={domain.id} onClick={() => setActiveDomain(index)} className={`flex w-full items-center gap-5 border-b border-line p-5 text-left transition-all ${activeDomain === index ? 'bg-ink text-white' : 'hover:bg-ivory'}`}>
                    <span className={`text-xs ${activeDomain === index ? 'text-cyan' : 'text-muted'}`}>{domain.number}</span>
                    <Icon size={20} className={activeDomain === index ? 'text-cyan' : 'text-muted'} />
                    <span className="font-display text-xl">{domain.title}</span>
                    <ArrowRight size={16} data-flip-rtl className={`ml-auto ${activeDomain === index ? 'text-cyan' : 'text-muted'}`} />
                  </button>
                );
              })}
            </div>
            <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-ink p-8 text-white lg:p-12">
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full border border-cyan/20" />
              <div className="absolute right-12 top-12 h-48 w-48 rounded-full border border-cyan/20" />
              <div className="relative">
                <span className="text-xs uppercase tracking-[0.2em] text-cyan">{t('research.selectedDomain')} / {researchDomains[activeDomain].number}</span>
                <h3 className="mt-6 max-w-md font-display text-4xl leading-tight">{researchDomains[activeDomain].title}</h3>
                <p className="mt-5 max-w-md leading-7 text-white/60">{researchDomains[activeDomain].text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {researchDomains[activeDomain].topics.map((topic) => <span key={topic} className="border border-cyan/30 px-3 py-1 text-xs text-cyan">{topic}</span>)}
                </div>
              </div>
              <div className="relative mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/45"><span className="h-px w-12 bg-cyan" /> {t('home.researchFlow')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.75fr_1.25fr] lg:px-10 lg:py-28">
          <div>
            <p className="eyebrow text-cyan">{t('home.appliedWorkEyebrow')}</p>
            <h2 className="section-title mt-5 text-white">{t('home.appliedTitle')}<br />{t('home.appliedTo')} <span className="text-cyan">{t('home.appliedHighlight')}</span></h2>
            <p className="mt-6 max-w-sm leading-7 text-white/55">{t('home.appliedDesc')}</p>
            <Link to="/projects" className="link-button mt-8 text-cyan">{t('home.exploreProjects')} <ArrowRight size={16} data-flip-rtl /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {projectPreview.map((project, index) => {
              const Icon = project.icon;
              return (
                <article key={index} className="border border-white/15 p-6 transition-colors hover:border-cyan/60">
                  <div className="mb-12 flex justify-between text-cyan"><Icon size={22} /><span className="text-[10px] uppercase tracking-[0.18em]">{t('home.projectLabel')} 0{index + 1}</span></div>
                  <h3 className="font-display text-2xl">{t(project.titleKey)}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/50">{t(project.descKey)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28">
          <div><p className="eyebrow">{t('home.journeyEyebrow')}</p><h2 className="section-title mt-5">{t('experience.title')}<br /><span className="text-cyan">{t('experience.titleHighlight')}</span></h2><p className="mt-6 max-w-sm leading-7 text-muted">{t('home.journeyDesc')}</p></div>
          <div className="border-t border-line">
            {journey.map((item, index) => (
              <div key={index} className="group grid gap-4 border-b border-line py-7 sm:grid-cols-[130px_1fr] sm:gap-8">
                <span className="text-sm text-cyan">{item.years}</span>
                <div><h3 className="font-display text-2xl transition-colors group-hover:text-cyan">{t(item.roleKey)}</h3><p className="mt-2 text-sm text-muted">{t(item.orgKey)}</p></div>
              </div>
            ))}
          </div>
          <Link to="/experience" className="link-button mt-4">{t('home.fullTimeline')} <ArrowRight size={16} data-flip-rtl /></Link>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="eyebrow">{t('home.publicationsEyebrow')}</p><h2 className="section-title mt-5">{t('publications.title')}<br /><span className="text-cyan">{t('home.publicationsHighlight')}</span></h2></div>
            <Link to="/publications" className="link-button">{t('home.publicationExplorer')} <ArrowRight size={16} data-flip-rtl /></Link>
          </div>
          <div className="mt-12 border-t border-line">
            {publications.slice(0, 3).map((pub, index) => (
              <article key={pub.id} className="group grid gap-5 border-b border-line py-7 lg:grid-cols-[70px_1fr_110px] lg:items-start">
                <span className="font-display text-2xl text-cyan">0{index + 1}</span>
                <div>
                  <div className="mb-3 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.15em] text-muted"><span>{pub.type}</span><span className="text-cyan">{pub.domain}</span></div>
                  <h3 className="max-w-3xl font-display text-2xl leading-tight transition-colors group-hover:text-cyan">{pub.title}</h3>
                  <p className="mt-3 text-sm text-muted">{pub.venue}{pub.publisher ? ` · ${pub.publisher}` : ''}{pub.volume ? ` · ${pub.volume}` : ''}</p>
                </div>
                <span className="text-sm text-muted lg:text-right">{pub.year}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div><p className="eyebrow">{t('home.teachingEyebrow')}</p><h2 className="section-title mt-5">{t('teaching.title')}<br /><span className="text-cyan">{t('teaching.titleHighlight')}</span></h2></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-line bg-paper p-6"><GraduationCap className="text-cyan" size={24} /><h3 className="mt-10 font-display text-2xl">{t('teaching.university')}</h3><p className="mt-3 text-sm leading-6 text-muted">{t('home.universityTeachingDesc')}</p></div>
            <div className="border border-line bg-paper p-6"><BookOpen className="text-cyan" size={24} /><h3 className="mt-10 font-display text-2xl">{t('teaching.execEd')}</h3><p className="mt-3 text-sm leading-6 text-muted">{t('home.execEdDesc')}</p></div>
          </div>
        </div>
      </section>

      <section className="bg-cyan text-ink">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-20">
          <div><p className="text-xs uppercase tracking-[0.2em] text-ink/60">{t('metrics.verifyEyebrow')}</p><h2 className="mt-4 max-w-2xl font-display text-4xl tracking-[-0.03em] sm:text-5xl">{t('home.exploreEvidence')}</h2></div>
          <div className="flex flex-wrap gap-3">
            <a href={profile.googleScholar} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-ink/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] transition-colors hover:bg-ink hover:text-cyan">Google Scholar <ExternalLink size={14} /></a>
            <a href={profile.researchGate} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-white hover:text-ink">ResearchGate <ExternalLink size={14} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
