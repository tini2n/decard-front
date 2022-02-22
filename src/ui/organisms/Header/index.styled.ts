import styled from 'styled-components';

import { Sizes } from 'lib/constants/styles';

const S = {
	Header: styled.header.attrs(() => ({ id: 'header' }))`
		flex-shrink: 0;
		width: 100vw;
		max-width: ${Sizes.PAGE_MAX_WIDTH}px;
		transition: all 0.4s ease;

		&.is-shrinked {
			// width: calc(${Sizes.COL_WIDTH * 3} / ${Sizes.PAGE_MAX_WIDTH} * 100%) !important;
			// width: 360px !important;
			width: 100%;
		}
	`,
};

export { S };
