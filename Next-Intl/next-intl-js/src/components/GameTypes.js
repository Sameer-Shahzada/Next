import { useTranslations } from 'next-intl'
import React from 'react'

const GameTypes = () => {
    const t = useTranslations("GameTypesComponent")
    return (
        <div className='mt-4'>
            <div>
                <h1 className='text-center'>{t('heading')}</h1>
                <h2 className='text-center'>{t('subheading')}</h2>
            </div>
        </div>
    )
}

export default GameTypes