import { BookOpen, GraduationCap, Award } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { executiveEducationSubjects, teachingInstitutions } from '@/data/teaching';
import { certifications } from '@/data/awards';
import { useLang } from '@/i18n/LanguageContext';

export function Teaching() {
  const { t } = useLang();

  return (
    <main>
      <PageHeader eyebrow={t('teaching.eyebrow')} title={t('teaching.title')} highlight={t('teaching.titleHighlight')}>
        <p>{t('teaching.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 text-cyan"><GraduationCap size={24} /><p className="eyebrow">{t('teaching.university')}</p></div>
              <h2 className="mt-4 font-display text-3xl leading-tight">{t('teaching.institutions')}</h2>
              <div className="mt-8 grid gap-3">
                {teachingInstitutions.map((inst) => (
                  <div key={inst} className="border-b border-line py-3 text-sm font-medium text-ink/80">{inst}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-cyan"><BookOpen size={24} /><p className="eyebrow">{t('teaching.execEd')}</p></div>
              <h2 className="mt-4 font-display text-3xl leading-tight">{t('teaching.subjects')}</h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {executiveEducationSubjects.map((subject) => (
                  <span key={subject} className="border border-line bg-ivory px-4 py-2 text-sm text-muted">{subject}</span>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted">Courses organized by topic, audience, organization and year in the full version.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-cyan">{t('teaching.certEyebrow')}</p>
          <h2 className="section-title mt-5 text-white">{t('teaching.certTitle')}<br /><span className="text-cyan">{t('teaching.certHighlight')}</span></h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="border border-white/15 p-8">
                <Award className="text-cyan" size={28} />
                <h3 className="mt-8 font-display text-xl">{cert.title}</h3>
                <p className="mt-3 text-sm text-white/50">{cert.issuer}</p>
                {cert.detail && <p className="mt-2 text-sm text-cyan">{cert.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
