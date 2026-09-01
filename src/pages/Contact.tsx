import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { useLang } from '@/i18n/LanguageContext';

const inquiryTypeKeys = ['contact.professional', 'contact.research', 'contact.academic', 'contact.speaking', 'contact.consultation'];

export function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', organization: '', subject: '', message: '', inquiryType: inquiryTypeKeys[0] });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <PageHeader eyebrow={t('contact.eyebrow')} title={t('contact.title')} highlight={t('contact.titleHighlight')}>
        <p>{t('contact.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.5fr] lg:px-10">
          <div>
            <div className="flex items-center gap-3 text-cyan"><Mail size={24} /><p className="eyebrow">{t('contact.inquiryTypes')}</p></div>
            <div className="mt-8 space-y-3">
              {inquiryTypeKeys.map((key) => (
                <div key={key} className="flex items-center gap-3 border-b border-line py-3 text-sm text-ink/80"><ArrowRight size={14} data-flip-rtl className="text-cyan" /> {t(key)}</div>
              ))}
            </div>
            <div className="mt-12 border border-line bg-ivory p-6">
              <p className="eyebrow">{t('contact.privacyEyebrow')}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{t('contact.privacyNote')}</p>
            </div>
          </div>

          <div className="border border-line bg-ivory p-8 lg:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan/20 text-cyan"><Mail size={32} /></div>
                <h3 className="mt-8 font-display text-3xl">{t('contact.sent')}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-muted">{t('contact.sentDesc')}</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', organization: '', subject: '', message: '', inquiryType: inquiryTypeKeys[0] }); }} className="mt-8 text-xs uppercase tracking-[0.14em] text-cyan underline-offset-4 hover:underline">{t('contact.sendAnother')}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="inquiryType" className="eyebrow">{t('contact.type')}</label>
                  <select id="inquiryType" value={form.inquiryType} onChange={(e) => setForm({ ...form, inquiryType: e.target.value })} className="mt-3 w-full border border-line bg-white px-4 py-3 text-sm text-ink focus:border-cyan focus:outline-none">
                    {inquiryTypeKeys.map((key) => <option key={key} value={key}>{t(key)}</option>)}
                  </select>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow">{t('contact.name')}</label>
                    <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-3 w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-cyan focus:outline-none" placeholder={t('contact.namePlaceholder')} />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow">{t('contact.email')}</label>
                    <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-3 w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-cyan focus:outline-none" placeholder={t('contact.emailPlaceholder')} />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="organization" className="eyebrow">{t('contact.organization')}</label>
                    <input id="organization" type="text" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="mt-3 w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-cyan focus:outline-none" placeholder={t('contact.orgPlaceholder')} />
                  </div>
                  <div>
                    <label htmlFor="subject" className="eyebrow">{t('contact.subject')}</label>
                    <input id="subject" type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="mt-3 w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-cyan focus:outline-none" placeholder={t('contact.subjectPlaceholder')} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="eyebrow">{t('contact.message')}</label>
                  <textarea id="message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-3 w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-cyan focus:outline-none" placeholder={t('contact.messagePlaceholder')} />
                </div>
                <button type="submit" className="group flex items-center gap-3 bg-cyan px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-1">{t('contact.send')} <ArrowRight size={16} data-flip-rtl className="transition-transform group-hover:translate-x-1" /></button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
