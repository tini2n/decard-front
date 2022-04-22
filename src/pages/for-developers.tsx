import { Row, Col } from 'react-bootstrap';

import { ContentWrapper } from 'ui/molecules';
import { Heading, Form, Input, Button } from 'ui/atoms';

const ForDevelopers = ({}) => {
	return (
		<ContentWrapper style={{ paddingTop: '0' }}>
			<Heading
				description="We're always on the lookout for the best talent! If you'd like to get in touch, check out our open positions."
				style={{ borderBottom: '0' }}
			>
				We develop innovative software that change people lives for the better
			</Heading>
			<Row>
				<Col md={4}>
					<h3>UI/UX Designer</h3>
				</Col>
				<Col md={4}>
					<h3>UI/UX Designer</h3>
				</Col>
				<Col md={4}>
					<h3>UI/UX Designer</h3>
				</Col>
			</Row>
			<Row>
				<Col md={4}>
					<h3>UI/UX Designer</h3>
				</Col>
				<Col md={4}>
					<h3>UI/UX Designer</h3>
				</Col>
				<Col md={4}>
					<h3>UI/UX Designer</h3>
				</Col>
			</Row>
		</ContentWrapper>
	);
};

export default ForDevelopers;
