import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import { Trans } from '@lingui/macro';

import { Environments } from 'lib/constants';

import { loadTranslation } from 'lib/utils/localization';

import { LanguageSwitcher } from 'ui/organisms';

const StyledParagraph = styled.p`
	color: red;
`;

const Index = () => {
	return (
		<>
			<h1>Welcome to Decard</h1>
			<LanguageSwitcher />
			<StyledParagraph>
				<Trans id='heading'>We are making Things!</Trans>
			</StyledParagraph>
			<Link href='/test'>test</Link>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === Environments.PROD);

	return {
		props: {
			translation,
		},
	};
};

export default Index;
