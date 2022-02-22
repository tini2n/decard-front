import styled from 'styled-components';

import { Colors } from 'lib/constants/styles';

const S = {
	Body: styled.body.attrs(() => ({ id: 'body' }))`
		background: ${Colors.OFF_WHITE};
		height: 100%;
	`,
};

export { S };
