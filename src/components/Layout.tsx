import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '@/i18n/LanguageContext';

const navItems = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.education', path: '/education' },
  { key: 'nav.research', path: '/research' },
  { key: 'nav.publications', path: '/publications' },
  { key: 'nav.projects', path: '/projects' },
  { key: 'nav.experience', path: '/experience' },
  { key: 'nav.teaching', path: '/teaching' },
  { key: 'nav.talks', path: '/talks' },
  { key: 'nav.awards', path: '/awards' },
  { key: 'nav.metrics', path: '/metrics' },
  { key: 'nav.contact', path: '/contact' },
];

const secondaryNav = [
  { key: 'nav.books', path: '/books' },
  { key: 'nav.memberships', path: '/memberships' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, lang, toggleLang } = useLang();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" aria-label={t('nav.home')}>
          <span className="flex h-10 w-10 items-center justify-center border border-cyan/50 text-cyan transition-colors group-hover:border-cyan group-hover:bg-cyan group-hover:text-ink">MM</span>
          <span className="hidden text-left sm:block">
            <span className="block font-display text-sm font-semibold tracking-wide">MEHDI MANSOURI</span>
            <span className="block text-[10px] uppercase tracking-[0.24em] text-white/50">{t('site.tagline')}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={`text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-cyan ${isActive(item.path) ? 'text-cyan' : 'text-white/65'}`}>
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleLang} className="flex items-center gap-2 border border-white/20 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-cyan hover:text-cyan" aria-label="Switch language" aria-pressed={lang === 'fa'}>
            {lang === 'en' ? <>FA</> : <>EN</>}
          </button>
          <button className="xl:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-ink px-6 py-5 xl:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1 sm:grid-cols-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className={`border-b border-white/10 py-3 text-sm uppercase tracking-[0.12em] transition-colors ${isActive(item.path) ? 'text-cyan' : 'text-white/75'}`}>
                {t(item.key)}
              </Link>
            ))}
            {secondaryNav.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-3 text-sm uppercase tracking-[0.12em] text-white/50">
                {t(item.key)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-cyan text-cyan">MM</span>
            <span className="font-display text-lg">Dr. Mehdi Mansouri</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/45">Researcher, consultant and educator at the intersection of artificial intelligence, data, governance and impact.</p>
        </div>
        <div>
          <p className="eyebrow text-cyan">{t('nav.navigate')}</p>
          <div className="mt-5 grid gap-3 text-sm text-white/55">
            <Link to="/about" className="transition-colors hover:text-cyan">{t('nav.about')}</Link>
            <Link to="/research" className="transition-colors hover:text-cyan">{t('nav.research')}</Link>
            <Link to="/publications" className="transition-colors hover:text-cyan">{t('nav.publications')}</Link>
            <Link to="/projects" className="transition-colors hover:text-cyan">{t('nav.projects')}</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-cyan">{t('nav.more')}</p>
          <div className="mt-5 grid gap-3 text-sm text-white/55">
            <Link to="/experience" className="transition-colors hover:text-cyan">{t('nav.experience')}</Link>
            <Link to="/teaching" className="transition-colors hover:text-cyan">{t('nav.teaching')}</Link>
            <Link to="/awards" className="transition-colors hover:text-cyan">{t('nav.awards')}</Link>
            <Link to="/contact" className="transition-colors hover:text-cyan">{t('nav.contact')}</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-cyan">{t('nav.profiles')}</p>
          <div className="mt-5 grid gap-3 text-sm text-white/55">
            <a href="https://scholar.google.com/citations?user=ia2p9fUAAAAJ&hl=en" target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan">Google Scholar</a>
            <a href="https://www.researchgate.net/profile/Mehdi-Mansouri" target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan">ResearchGate</a>
            <Link to="/books" className="transition-colors hover:text-cyan">{t('nav.books')}</Link>
            <Link to="/memberships" className="transition-colors hover:text-cyan">{t('nav.memberships')}</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-6 py-5 text-[10px] uppercase tracking-[0.16em] text-white/35 lg:px-10">
          <span>© {new Date().getFullYear()} Mehdi Mansouri</span>
          <span>{t('site.copyright')}</span>
        </div>
      </div>
    </footer>
  );
}
