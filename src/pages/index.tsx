import styled from 'styled-components';
import Link from 'next/link';

const StyledParagraph = styled.p`
	color: red;
`;

const Index = () => {
	return (
		<>
			<h1>Welcome to Decard</h1>
			<StyledParagraph>We are making Things!</StyledParagraph>
			<Link href='/test'>test</Link>
		</>
	);
};

export default Index;
