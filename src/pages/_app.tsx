import '../lib/scss/index.scss';

import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Head } from 'ui/organisms';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const theme = {};

const Application = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head />
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default Application;
