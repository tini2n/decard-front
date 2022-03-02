import styled from 'styled-components';

import { Colors } from 'lib/constants/styles';

const S = {
	Header: styled.header.attrs(() => ({ id: 'header' }))`
		position: relative;
		background: ${Colors.OFF_WHITE};
		z-index: 1000;
	`,
};

export { S };
