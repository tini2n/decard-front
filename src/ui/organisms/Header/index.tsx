import { Logo } from 'ui/molecules';

import { Props } from './index.model';
import { S } from './index.styled';

const Header: React.FunctionComponent<Props> = ({ ...rest }) => {
	return (
		<S.Header {...rest}>
			<Logo />
		</S.Header>
	);
};

export { Header };
