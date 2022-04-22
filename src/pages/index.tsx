import { GetServerSideProps } from 'next';
import { Row, Col } from 'react-bootstrap';
// import { Trans } from '@lingui/macro';
import styled from 'styled-components';

import { Environments } from 'lib/constants';

import { loadTranslation } from 'lib/utils/localization';

import { ContentWrapper, FeatureImage, LabeledTitle, FeatureText, FeatureLink } from 'ui/molecules';

const Index = (props) => {
	return (
		<ContentWrapper style={{ padding: '40px 0' }}>
			<h1 className='heading serif' style={{ marginBottom: '90px' }}>
				A Fintech company that creates a reliable ecosystem around an alternative monetary environment, helping
				companies of all sizes and in all industries run at their best.
			</h1>
			<FeatureImage src='/images/nggyu.png' alt='Feature Astley' />
			<LabeledTitle label='Mission' level='h2' style={{ marginBottom: '70px' }}>
				Empower Human Wellbeing in the New World of Finance
			</LabeledTitle>
			<Row>
				<Col md={6}>
					<FeatureText>
						<p>Our purpose is to help the world run better and improve people’s lives.</p>
					</FeatureText>
				</Col>
				<Col md={6}>
					<FeatureText>
						<p>Our promise is to innovate to help our customers run at their best.</p>
					</FeatureText>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<FeatureText>
						<p>
							We engineer solutions to fuel innovation, foster equality, and spread fair banking
							opportunities across borders and cultures.
						</p>
					</FeatureText>
				</Col>
			</Row>
			<Row style={{ marginBottom: '100px' }}>
				<Col md={6}>
					<FeatureLink href='/team' linkLabel='team' imageSrc='/images/nggyu1.jpeg' />
				</Col>
				<Col md={6}>
					<FeatureLink href='/projects' linkLabel='projects' imageSrc='/images/nggyu1.jpeg' />
				</Col>
			</Row>
		</ContentWrapper>
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
