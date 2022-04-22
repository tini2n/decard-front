import styled from 'styled-components';

const S = {
	Heading: styled.h1.attrs(() => ({ className: 'uppercase super' }))``,
	Container: styled.div.attrs(() => ({}))`
		padding: 1.25rem 0 2.5rem;
		border-bottom: 1px solid #000;

		p {
			font-size: 24px;
			line-height: 28px;
		}
	`,
};

export { S };
