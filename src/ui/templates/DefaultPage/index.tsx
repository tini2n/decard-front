import { useRouter } from 'next/router';

import { Header, Sidebar, Footer } from 'ui/organisms';
import { Logo } from 'ui/molecules';

import { S } from './index.styled';

const DefaultPage: React.FunctionComponent = ({ children }) => {
	const router = useRouter();

	return (
		<S.DefaultPage>
			{router.pathname === '/' && <Header style={{ pointerEvents: 'none' }} />}
			<Logo id='logo' />
			<S.Wrapper>
				<Sidebar />
				<S.Main>
					<S.Content>{children}</S.Content>
					<Footer />
				</S.Main>
			</S.Wrapper>
		</S.DefaultPage>
	);
};

export { DefaultPage };
