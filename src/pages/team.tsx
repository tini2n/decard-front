import { Row, Col } from 'react-bootstrap';

import { ContentWrapper, TeamMember, FeatureLink } from 'ui/molecules';

const Team = () => {
	return (
		<ContentWrapper>
			<Row style={{ marginBottom: '80px' }}>
				<Col md={6}>
					<TeamMember
						title='Theis Simonsen'
						position='CEO'
						imageSrc='/images/nggyu1.jpeg'
						description='Strategist, developer, lecturer and executive. Before Tagion, Theis served as a senior consultant at KPMG and an external lecturer at Copenhagen Business School.'
					/>
				</Col>
				<Col md={6}>
					<TeamMember
						title='Kristian Vestergaard'
						position='CCO'
						imageSrc='/images/nggyu1.jpeg'
						description='Software architect and leader. Before Tagion, was a Director, Digital Strategist and Architect in Jabra. Before that, a tutor and consultant for IBM and PwC and GDPR consultant at Ørsted.'
					/>
				</Col>
			</Row>
			<Row style={{ marginBottom: '80px' }}>
				<Col md={6}>
					<TeamMember
						title='Carsten Rasmussen'
						position='CTO'
						imageSrc='/images/nggyu1.jpeg'
						description='Low-level architecture and core network concepts. Before Tagion, co-founded Polaric Semiconductor as a CTO, leading a team that was engineering NFC and Bluetooth chips.'
					/>
				</Col>
				<Col md={6}>
					<TeamMember
						title='Theis Simonsen'
						position='CEO'
						imageSrc='/images/nggyu1.jpeg'
						description='Strategist, developer, lecturer and executive. Before Tagion, Theis served as a senior consultant at KPMG and an external lecturer at Copenhagen Business School.'
					/>
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

export default Team;
