import { Row, Col } from 'react-bootstrap';

import { ContentWrapper, ProductItem, FeatureLink } from 'ui/molecules';

const Products = () => {
	return (
		<ContentWrapper>
			<ProductItem
				title='Tagion'
				description='Tagion efficient medium of exchange and a reliable store of value.'
				href='/'
				imageSrc='/images/nggyu.png'
				style={{ marginBottom: '100px' }}
			/>
			<ProductItem
				title='Project 2'
				description='Medium of exchange and a reliable store of value.'
				href='/'
				imageSrc='/images/nggyu.png'
				style={{ marginBottom: '100px' }}
			/>
			<ProductItem
				title='Project 3'
				description='Medium of exchange and a reliable store of value.'
				href='/'
				imageSrc='/images/nggyu.png'
				style={{ marginBottom: '70px' }}
			/>
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

export default Products;
