import styled from 'styled-components';

import { Sizes } from 'lib/constants/styles';

const S = {
	Sidebar: styled.aside`
		display: flex;
		flex-direction: column;

		height: 100%;
		padding: 0 5px;
		z-index: 100;

		.navigation {
			flex-grow: 1;
		}

		.socials {
			position: fixed;
			bottom: 0;
			left: 0;
			width: calc(${Sizes.COL_WIDTH * 3} / ${Sizes.PAGE_MAX_WIDTH} * 100%);
		}
	`,
};

export { S };
