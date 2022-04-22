import { Container, Row, Col } from 'react-bootstrap';

import { Image, Link } from 'ui/atoms';

import { S } from './index.styled';

const Post = ({ className = '' }) => {
	return (
		<S.Container className={className}>
			<Row>
				<Col md={4}>
					<S.ImageContainer>
						<Image src='/images/nggyu.png' alt='Feature Astley' />
					</S.ImageContainer>
				</Col>
				<Col md={8}>
					<S.Link href='google.com' target='_blank'>
						TechCrunch
					</S.Link>
					<S.Title>Really innovative world changing products. </S.Title>
				</Col>
			</Row>
		</S.Container>
	);
};

export { Post };
