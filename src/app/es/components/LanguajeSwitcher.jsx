import Link from 'next/link';

export default function LanguageSwitcher({ locales = ['es', 'en'], locale = 'es', pathname = '/' }) {
    return (
        <div>
            {locales.map((lng) => (
                <Link
                    key={lng}
                    href={`/${lng}${pathname}`}
                    locale={undefined}
                >
                    <button disabled={locale === lng} style={{ margin: '0 5px' }}>
                        {lng === 'es' ? 'Español' : 'English'}
                    </button>
                </Link>
            ))}
        </div>
    );
}
