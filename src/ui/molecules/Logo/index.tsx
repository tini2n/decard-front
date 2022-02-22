import { S } from './index.styled';

import LogoIcon from 'lib/icons/decard_logo_wordmark.svg';

const Logo = ({}) => {
	return (
		<S.Wrapper href='/'>
			<LogoIcon />
		</S.Wrapper>
	);
};

export { Logo };
