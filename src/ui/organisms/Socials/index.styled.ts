import styled from 'styled-components';

import { Sizes, Colors } from 'lib/constants/styles';

const S = {
	Socials: styled.div.attrs(() => ({ className: 'socials' }))`
		display: flex;
		justify-content: space-around;
		border-top: 1px solid ${Colors.BLACK};
		height: ${Sizes.FOOTER_HEIGHT}px;
		padding: 5px 0;

		a {
			font-size: 24px;
			text-align: center;
			flex-grow: 1;
			padding: 10px 0;

			:not(:last-child) {
				border-right: 1px solid ${Colors.BLACK};
			}
		}
	`,
};

export { S };
