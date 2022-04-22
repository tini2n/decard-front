import styled from 'styled-components';

import { Sizes } from 'lib/constants/styles';

const S = {
	DefaultPage: styled.div.attrs(() => ({ id: `default-page` }))`
		display: flex;
		flex-direction: column;
		height: 100%;

		#duplicated-logo,
		#logo {
			width: calc((${Sizes.COL_WIDTH * 3} / ${Sizes.PAGE_MAX_WIDTH} * 100%) - 10px);
			z-index: 999;
		}

		#logo {
			position: fixed;
		}
	`,
	Wrapper: styled.div.attrs(() => ({ id: `` }))`
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		justify-content: end;
	`,
	Main: styled.main.attrs(() => ({ id: `main` }))<{ headerHeight?: number; isLogoShrinked?: boolean }>`
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		width: calc(${Sizes.COL_WIDTH * 9} / ${Sizes.PAGE_MAX_WIDTH} * 100%);
		overflow: hidden;
		margin: 0 5px;
	`,
	Content: styled.main.attrs(() => ({ id: `content` }))`
		flex-grow: 1;
		& > div {
			background: transparent !important;
		}
	`,
};

export { S };
