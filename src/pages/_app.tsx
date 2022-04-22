import '../lib/scss/index.scss';

import { useRef, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { store } from 'lib/store';

import { initTranslation } from 'lib/utils/localization';

import { Locales } from 'lib/constants';
import { Colors } from 'lib/constants/styles';

import { DefaultPage } from 'ui/templates';
import { Head } from 'ui/organisms';

const GlobalStyle = createGlobalStyle<{ pathname?: string }>`
	html,
	body {
		height: 100%;
	}

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		background: ${({ pathname = 'default' }) => {
			switch (pathname) {
				case '/for-developers':
					return Colors.VIOLET;

				case '/for-partners':
					return Colors.OCHRE;

				default:
					return Colors.OFF_WHITE;
			}
		}};
    }

	#__next {
		height: 100%;
	}
`;

const theme = {};

initTranslation(i18n);

const Application = ({ Component, pageProps }: AppProps) => {
	const router = useRouter(),
		locale = router.locale || router.defaultLocale || Locales.EN,
		firstRender = useRef(true);

	useEffect(() => {
		if (pageProps.translation && firstRender.current) {
			//load the translations for the locale
			i18n.load(locale, pageProps.translation);
			i18n.activate(locale);
			// render only once
			firstRender.current = false;
		}
	}, [locale, pageProps.translation]);

	useEffect(() => {
		if (pageProps.translation) {
			i18n.load(locale, pageProps.translation);
			i18n.activate(locale);
		}
	}, [locale, pageProps.translation]);

	return (
		<>
			<Head />
			<GlobalStyle pathname={router.pathname} />
			<ThemeProvider theme={theme}>
				<I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
					<Provider store={store}>
						<DefaultPage>
							<Component {...pageProps} />
						</DefaultPage>
					</Provider>
				</I18nProvider>
			</ThemeProvider>
		</>
	);
};

Application.getServerSideProps = async ({ Component, ctx }) => {
	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

	//Anything returned here can be access by the client
	return { pageProps: pageProps };
};

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(Application);
