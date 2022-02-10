import '../lib/scss/index.scss';

import { useRef, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { initTranslation } from 'lib/utils/localization';

import { Locales } from 'lib/constants';

import { Head } from 'ui/organisms';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const theme = {};

initTranslation(i18n);

const Application = ({ Component, pageProps }: AppProps) => {
	const router = useRouter(),
		locale = router.locale || router.defaultLocale || Locales.EN,
		firstRender = useRef(true);

	if (pageProps.translation && firstRender.current) {
		//load the translations for the locale
		i18n.load(locale, pageProps.translation);
		i18n.activate(locale);
		// render only once
		firstRender.current = false;
	}

	useEffect(() => {
		if (pageProps.translation) {
			i18n.load(locale, pageProps.translation);
			i18n.activate(locale);
		}
	}, [locale, pageProps.translation]);

	return (
		<>
			<Head />
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<I18nProvider i18n={i18n}>
					<Component {...pageProps} />
				</I18nProvider>
			</ThemeProvider>
		</>
	);
};

export default Application;
