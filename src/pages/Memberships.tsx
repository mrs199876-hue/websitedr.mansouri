import { Award, Users } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { scientificEvents, scientificLeadership, scientificMemberships } from '@/data/awards';
import { useLang } from '@/i18n/LanguageContext';

export function Memberships() {
  const { t } = useLang();

  return (
    <main>
      <PageHeader eyebrow={t('memberships.eyebrow')} title={t('memberships.title')} highlight={t('memberships.titleHighlight')}>
        <p>{t('memberships.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-3 text-cyan"><Users size={24} /><p className="eyebrow">{t('memberships.memberships')}</p></div>
              <div className="mt-8 space-y-3">
                {scientificMemberships.map((member) => (
                  <div key={member} className="border border-line bg-ivory p-4 text-sm font-medium">{member}</div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">{t('memberships.note')}</p>
            </div>
            <div>
              <div className="flex items-center gap-3 text-cyan"><Award size={24} /><p className="eyebrow">{t('memberships.leadership')}</p></div>
              <div className="mt-8 space-y-3">
                {scientificLeadership.map((role) => (
                  <div key={role} className="border-b border-line py-3 text-sm text-ink/80">{role}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-cyan"><Award size={24} /><p className="eyebrow">{t('memberships.events')}</p></div>
              <div className="mt-8 space-y-3">
                {scientificEvents.map((event) => (
                  <div key={event} className="border-b border-line py-3 text-sm text-ink/80">{event}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
