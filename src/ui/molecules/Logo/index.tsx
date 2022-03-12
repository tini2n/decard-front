import { S } from './index.styled';
import { Props } from './index.model';

import LogoIcon from 'lib/icons/decard_logo_wordmark.svg';

const Logo: React.FunctionComponent<Props> = ({ ...rest }) => {
	return (
		<S.Logo {...rest} href='/'>
			<LogoIcon />
		</S.Logo>
	);
};

export { Logo };
