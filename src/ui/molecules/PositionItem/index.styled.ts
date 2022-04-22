import styled from 'styled-components';
import { Fonts } from 'lib/constants/styles';

const S = {
	Container: styled.div`
		min-height: 300px;
		border-top: 1px solid #000;
		padding: 1.25rem 0;
	`,
	Title: styled.h3`
		font-family: ${Fonts.SANS_SERIF};
		font-weight: 400;
		margin-bottom: 1.25rem;
	`,
};

export { S };
