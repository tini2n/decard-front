import { S } from './index.styled';

import ArrowIcon from 'lib/icons/arrow.svg';

const Button = ({ children, type = '', withArrow = false, ...rest }) => {
	return (
		<S.Button type={type} {...rest}>
			{children}
			{withArrow && <ArrowIcon style={{ marginLeft: '1.25rem', verticalAlign: 'baseline' }} />}
		</S.Button>
	);
};

export { Button };
