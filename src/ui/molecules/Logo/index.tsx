import { S } from './index.styled';

import LogoIcon from 'lib/icons/decard_logo_wordmark.svg';

const Logo = ({ ...rest }) => {
	return (
		<S.Logo {...rest} href='/'>
			<LogoIcon />
		</S.Logo>
	);
};

export { Logo };
