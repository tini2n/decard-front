import styled from 'styled-components';

import { Colors } from 'lib/constants/styles';

import { Link } from 'ui/atoms';

const S = {
	Navigation: styled.nav.attrs(() => ({ className: `navigation` }))`
		font-family: 'IBM Plex Mono', monospace;
		font-size: 36px;
		line-height: 48px;
		padding: 40px 0;
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
