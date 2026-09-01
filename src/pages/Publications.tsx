import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { publications } from '@/data/publications';
import { useLang } from '@/i18n/LanguageContext';

const years = ['All', '2025', '2017', '2015', '2014'];
const types = ['All', 'Journal', 'Conference'];
const domains = ['All', 'Artificial Intelligence', 'Data Science', 'Intelligent Transportation', 'Cybersecurity'];

export function Publications() {
  const { t } = useLang();
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('All');
  const [type, setType] = useState('All');
  const [domain, setDomain] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return publications.filter((pub) => {
      if (query && !pub.title.toLowerCase().includes(query.toLowerCase()) && !pub.venue.toLowerCase().includes(query.toLowerCase())) return false;
      if (year !== 'All' && pub.year !== year) return false;
      if (type !== 'All' && pub.type !== type) return false;
      if (domain !== 'All' && pub.domain !== domain) return false;
      return true;
    });
  }, [query, year, type, domain]);

  return (
    <main>
      <PageHeader eyebrow={t('publications.eyebrow')} title={t('publications.title')} highlight={t('publications.titleHighlight')}>
        <p>{t('publications.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="border border-line bg-ivory p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto_auto_auto]">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('publications.search')} className="w-full border border-line bg-white py-3 pl-12 pr-4 text-sm text-ink placeholder:text-muted focus:border-cyan focus:outline-none" aria-label={t('publications.search')} />
              </div>
              <select value={year} onChange={(e) => setYear(e.target.value)} className="border border-line bg-white px-4 py-3 text-sm text-ink focus:border-cyan focus:outline-none" aria-label="Filter by year">
                {years.map((y) => <option key={y} value={y}>{y === 'All' ? t('publications.allYears') : y}</option>)}
              </select>
              <select value={type} onChange={(e) => setType(e.target.value)} className="border border-line bg-white px-4 py-3 text-sm text-ink focus:border-cyan focus:outline-none" aria-label="Filter by type">
                {types.map((tp) => <option key={tp} value={tp}>{tp === 'All' ? t('publications.allTypes') : tp}</option>)}
              </select>
              <select value={domain} onChange={(e) => setDomain(e.target.value)} className="border border-line bg-white px-4 py-3 text-sm text-ink focus:border-cyan focus:outline-none" aria-label="Filter by domain">
                {domains.map((d) => <option key={d} value={d}>{d === 'All' ? t('publications.allDomains') : d}</option>)}
              </select>
            </div>
            {(query || year !== 'All' || type !== 'All' || domain !== 'All') && (
              <button onClick={() => { setQuery(''); setYear('All'); setType('All'); setDomain('All'); }} className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-cyan"><X size={14} /> {t('publications.clearFilters')}</button>
            )}
          </div>

          <p className="mt-6 text-sm text-muted">{filtered.length} {t('publications.results')}</p>

          <div className="mt-8 border-t border-line">
            {filtered.map((pub) => (
              <article key={pub.id} className="border-b border-line py-8">
                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div>
                    <div className="mb-3 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.15em] text-muted">
                      <span className="border border-line px-2 py-1">{pub.type}</span>
                      <span className="text-cyan">{pub.domain}</span>
                      <span>{pub.language}</span>
                    </div>
                    <h3 className="max-w-3xl font-display text-2xl leading-tight">{pub.title}</h3>
                    <p className="mt-3 text-sm text-muted">{pub.venue}{pub.publisher ? ` · ${pub.publisher}` : ''}{pub.city ? ` · ${pub.city}` : ''}</p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted">
                      {pub.volume && <span>{t('publications.volume')}: {pub.volume}</span>}
                      {pub.pages && <span>{t('publications.pages')}: {pub.pages}</span>}
                      {pub.issn && <span>ISSN: {pub.issn}</span>}
                      {pub.quartile && <span className="text-cyan">{pub.quartile}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl text-cyan">{pub.year}</span>
                    <button onClick={() => setExpanded(expanded === pub.id ? null : pub.id)} className="text-xs uppercase tracking-[0.12em] text-cyan underline-offset-4 hover:underline" aria-expanded={expanded === pub.id}>
                      {expanded === pub.id ? t('publications.collapse') : t('publications.details')}
                    </button>
                  </div>
                </div>
                {expanded === pub.id && (
                  <div className="mt-6 border-t border-line pt-6 text-sm leading-7 text-muted">
                    <p><span className="font-medium text-ink">{t('publications.researchDomain')}:</span> {pub.domain}</p>
                    <p className="mt-2"><span className="font-medium text-ink">{t('publications.pubType')}:</span> {pub.type}</p>
                    <p className="mt-2"><span className="font-medium text-ink">{t('publications.venue')}:</span> {pub.venue}</p>
                    {pub.doi && <p className="mt-2"><span className="font-medium text-ink">DOI:</span> {pub.doi}</p>}
                    {pub.url && <p className="mt-2"><a href={pub.url} target="_blank" rel="noreferrer" className="text-cyan underline">View publication</a></p>}
                    {!pub.doi && !pub.url && <p className="mt-2 text-muted/70">{t('publications.doiNote')}</p>}
                  </div>
                )}
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="py-16 text-center text-muted">{t('publications.noResults')}</div>
            )}
          </div>
          <p className="mt-8 text-xs text-muted">{t('publications.note')}</p>
        </div>
      </section>
    </main>
  );
}
