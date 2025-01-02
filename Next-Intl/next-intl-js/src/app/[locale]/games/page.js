import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing';

const Games = () => {
    const t = useTranslations("GamesPage")
    return (
        <div className='mt-32 border border-red-500'>
            <div>
                <h1 className='text-center'>{t('heading')}</h1>

                <Link href="/about">
                    <h2 className='text-center'>{t('subheading')}</h2>
                </Link>
            </div>

        </div>
    )
}

export default Games