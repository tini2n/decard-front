import styled from 'styled-components';

import { Colors } from 'lib/constants/styles';

const S = {
	ProductItem: styled.div`
		label {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateY(-50%) translateX(-50%);
			pointer-events: none;
			background: ${Colors.WHITE};
			border-radius: 30px;
			padding: 13px 26px;
		}
	`,
	TextContainer: styled.div`
		display: flex;

		h2 {
			flex-grow: 1;
			font-size: 64px;
			font-family: 'IBM Plex Mono', monospace;
			text-transform: uppercase;
		}

		p {
			font-size: 24px;
			line-height: 28px;
		}

		h2,
		p {
			flex-basis: 50%;
		}
	`,
};

export { S };
