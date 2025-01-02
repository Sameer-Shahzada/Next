import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import GameTypes from '@/components/GameTypes';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className='mt-32'>
      <div>
        <h1 className='text-center'>{t('title')}</h1>

        <Link href="/about">
          <h2 className='text-center'>{t('about')}</h2>
        </Link>
      </div>

      <GameTypes />
    </div>
  );
}