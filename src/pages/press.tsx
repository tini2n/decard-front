import { Row, Col } from 'react-bootstrap';

import { PostsList } from 'ui/organisms';
import { ContentWrapper, FeatureLink } from 'ui/molecules';

const Press = () => {
	return (
		<ContentWrapper>
			<PostsList />
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

export default Press;
