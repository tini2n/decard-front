import styled from 'styled-components';

import { Sizes } from 'lib/constants/styles';

const S = {
	DefaultPage: styled.div.attrs(() => ({ id: `default-page` }))`
		display: flex;
		flex-direction: column;
		height: 100%;
		max-width: ${Sizes.PAGE_MAX_WIDTH}px;
		margin: 0 auto;
	`,
	Wrapper: styled.div.attrs(() => ({ id: `` }))`
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		justify-content: end;
	`,
	Main: styled.main.attrs(() => ({ id: `main` }))<{ headerHeight: number }>`
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		max-width: calc(${Sizes.COL_WIDTH * 9} / ${Sizes.PAGE_MAX_WIDTH} * 100%);

		transition: transform 0.4s ease;
		transform: translateY(${(p) => p.headerHeight || 0}px);
	`,
	Content: styled.main.attrs(() => ({ id: `content` }))`
		flex-grow: 1;
	`,
};

export { S };
