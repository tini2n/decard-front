import { Navigation, Socials } from 'ui/organisms';
import { Header } from 'ui/organisms';

import { Props } from './index.model';
import { S } from './index.styled';

const Sidebar: React.FunctionComponent<Props> = ({ isLogoShrinked = false }) => {
	return (
		<S.Sidebar>
			<Header isLogoShrinked={isLogoShrinked} />
			<Navigation />
			<Socials />
		</S.Sidebar>
	);
};

export { Sidebar };
