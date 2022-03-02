import { Navigation, Socials } from 'ui/organisms';

import { Props } from './index.model';
import { S } from './index.styled';

const Sidebar: React.FunctionComponent<Props> = ({}) => {
	return (
		<S.Sidebar>
			<Navigation />
			<Socials />
		</S.Sidebar>
	);
};

export { Sidebar };
