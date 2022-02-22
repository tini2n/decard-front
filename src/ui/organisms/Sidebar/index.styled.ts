import styled from 'styled-components';

import { Sizes } from 'lib/constants/styles';

const S = {
	Sidebar: styled.aside`
		display: flex;
		flex-direction: column;
		width: calc(${Sizes.COL_WIDTH * 3} / ${Sizes.PAGE_MAX_WIDTH} * 100%);

		position: fixed;
		max-width: 360px;

		.navigation {
			flex-grow: 1;
		}
	`,
};

export { S };
