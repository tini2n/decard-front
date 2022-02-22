import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Trans } from '@lingui/macro';
import styled from 'styled-components';

import { Environments } from 'lib/constants';
import { changeLogoSize } from 'lib/store/actions/ui';

import { loadTranslation } from 'lib/utils/localization';

import { LanguageSwitcher } from 'ui/organisms';

const StyledParagraph = styled.p`
	color: red;
`;

const Index = (props) => {
	// console.log(props);
	const TestingParagraph = () => (
		<StyledParagraph style={{ fontSize: '5rem' }}>
			<Trans id='heading'>We are making Things!</Trans>
		</StyledParagraph>
	);

	return (
		<>
			<h1>Welcome to Decard</h1>
			<LanguageSwitcher />
			<button onClick={props.changeLogoSize}>test</button>
			<TestingParagraph />
			<TestingParagraph />
			<TestingParagraph />
			<TestingParagraph />
			<TestingParagraph />
			<TestingParagraph />
			<TestingParagraph />
			<TestingParagraph />
			<TestingParagraph />
			<TestingParagraph />
			<TestingParagraph />
			<TestingParagraph />
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

const mapStateToProps = (state) => ({
	ui: state.ui,
});

const mapDispatchToProps = {
	changeLogoSize,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
