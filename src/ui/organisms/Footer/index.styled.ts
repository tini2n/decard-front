import styled from 'styled-components';

import { Sizes, Colors } from 'lib/constants/styles';

const S = {
	Footer: styled.footer.attrs(() => ({ id: 'footer' }))`
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border-top: 1px solid ${Colors.BLACK};
		height: ${Sizes.FOOTER_HEIGHT}px;

		a {
			font-size: 24px;
			color: ${Colors.BLACK};
			text-decoration: none;

			&:not(:last-child) {
				margin-right: 30px;
			}
		}
	`,
};

export { S };
