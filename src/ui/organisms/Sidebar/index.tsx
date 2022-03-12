import { Navigation, Socials } from 'ui/organisms';

import { Props } from './index.model';
import { S } from './index.styled';

const Sidebar: React.FunctionComponent<Props> = ({ navigationOffset }) => {
	return (
		<S.Sidebar>
			<Navigation fixedOffset={navigationOffset} />
			<Socials />
		</S.Sidebar>
	);
};

export { Sidebar };
