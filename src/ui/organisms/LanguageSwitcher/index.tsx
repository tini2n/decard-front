import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { t } from '@lingui/macro';

import { Locales } from 'lib/constants';

export function LanguageSwitcher() {
	const router = useRouter();
	const [locale, setLocale] = useState<Locales>(router.locale!.split('-')[0] as Locales);

	const languages: { [key: string]: string } = {
		en: t`English`,
		da: t`Danish`,
		ua: t`Ukrainian`,
	};

	useEffect(() => {
		router.push(router.pathname, router.pathname, { locale });
	}, [locale, router]);

	return (
		<select value={locale} onChange={(evt) => setLocale(evt.target.value as Locales)}>
			{Object.keys(languages).map((locale) => {
				return (
					<option value={locale} key={locale}>
						{languages[locale as unknown as Locales]}
					</option>
				);
			})}
		</select>
	);
}
