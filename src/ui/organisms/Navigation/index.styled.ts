import styled from 'styled-components';

import { Colors, Sizes } from 'lib/constants/styles';

import { Link } from 'ui/atoms';

const S = {
	Navigation: styled.nav.attrs(() => ({ id: `navigation` }))<{ fixedOffset?: number }>`
		font-family: 'IBM Plex Mono', monospace;
		font-size: 36px;
		line-height: 48px;
		padding: 40px 5px;

		&.fixed {
			position: fixed;
			left: 0;
			top: ${(p) => p.fixedOffset}px;
			width: calc(${Sizes.COL_WIDTH * 3} / ${Sizes.PAGE_MAX_WIDTH} * 100%);
		}
	`,
	Link: styled(Link)<{ className?: string }>`
		display: block;
		text-decoration: none;
		color: #000;
		border-top: 1px solid transparent;
		border-bottom: 1px solid transparent;
		transition: border-color 0.25s ease, padding 0.25s ease;

		&.active {
			border-color: ${Colors.BLACK};
			padding-left: 30px;
		}

		:hover {
			border-color: ${Colors.BLACK};
			color: inherit;
		}

		:not(:last-child) {
			margin-bottom: 6px;
		}
	`,
};

export { S };
