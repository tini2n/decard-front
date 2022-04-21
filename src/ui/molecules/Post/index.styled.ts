import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { Colors, Fonts } from 'lib/constants/styles';

const S = {
	Container: styled(Container).attrs(() => ({ className: `px-0` }))`
		padding: 40px 0;
		border-bottom: 1px solid ${Colors.BLACK};
	`,
	Link: styled.a`
		display: inline-block;
		font-style: italic;
		font-size: 18px;
		border-bottom: 1px solid ${Colors.BLACK};
		margin-bottom: 20px;
		cursor: pointer;
	`,
	Title: styled.h3`
		font-size: 36px;
		line-height: 43px;
		font-family: ${Fonts.SANS_SERIF};
		font-weight: 400;
	`,
	ImageContainer: styled.div`
		position: relative;
		padding-bottom: 56.25%;
		overflow: hidden;

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			max-width: 100%;
		}
	`,
};

export { S };
