import { BookOpen } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { book } from '@/data/awards';
import { useLang } from '@/i18n/LanguageContext';

export function Books() {
  const { t } = useLang();

  return (
    <main>
      <PageHeader eyebrow={t('books.eyebrow')} title={t('books.title')} highlight={t('books.titleHighlight')}>
        <p>{t('books.summary')}</p>
      </PageHeader>

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div className="relative mx-auto max-w-xs">
              <div className="portrait-placeholder aspect-[3/4] border border-cyan/30 bg-ink p-5">
                <div className="flex h-full flex-col justify-between border border-white/10 p-5 text-center text-white">
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-cyan"><span>{t('books.eyebrow')}</span><span>01</span></div>
                  <div><BookOpen className="mx-auto text-cyan" size={40} /><p className="mt-4 font-display text-xl">{book.title}</p></div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">{t('books.coverPlaceholder')}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow">Publication 01</p>
              <h2 className="mt-4 font-display text-4xl leading-tight">{book.title}</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border-b border-line pb-4"><p className="eyebrow">{t('books.publisher')}</p><p className="mt-2 text-sm font-medium">{book.publisher}</p></div>
                <div className="border-b border-line pb-4"><p className="eyebrow">{t('books.isbn')}</p><p className="mt-2 text-sm font-medium">{book.isbn}</p></div>
                <div className="border-b border-line pb-4"><p className="eyebrow">{t('books.printRun')}</p><p className="mt-2 text-sm font-medium">{book.printRun}</p></div>
                <div className="border-b border-line pb-4"><p className="eyebrow">{t('books.type')}</p><p className="mt-2 text-sm font-medium">{t('books.bookType')}</p></div>
              </div>
              <p className="mt-8 max-w-xl text-sm leading-7 text-muted">{t('books.desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
