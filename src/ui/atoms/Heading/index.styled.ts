import styled from 'styled-components';

const S = {
	Heading: styled.h1.attrs(() => ({ className: 'uppercase super' }))``,
	Container: styled.div.attrs(() => ({}))`
		padding: 20px 0 80px;
		border-bottom: 1px solid #000;

		p {
			font-size: 24px;
			line-height: 28px;
		}
	`,
};

export { S };
