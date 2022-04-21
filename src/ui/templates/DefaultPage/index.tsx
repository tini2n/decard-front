import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Header, Sidebar, Footer } from 'ui/organisms';
import { Logo } from 'ui/molecules';

import { S } from './index.styled';

const DefaultPage: React.FunctionComponent = ({ children }) => {
	const router = useRouter();
	const [navigationOffset, setNavigationOffset] = useState(0);

	const scrollHandler = (fixedEl, offsetEl, staticOffsetEl) => {
		if (window.pageYOffset + offsetEl.offsetHeight > fixedEl.offsetTop) {
			fixedEl.classList.add('fixed');
		}

		if (staticOffsetEl && window.pageYOffset + offsetEl.offsetHeight < staticOffsetEl.offsetHeight) {
			fixedEl.classList.remove('fixed');
		}
	};

	useEffect(() => {
		const navigationDOM = document.getElementById('navigation');
		const logoDOM: any = document.getElementById('logo');
		const headerDOM = document.getElementById('header');

		setNavigationOffset(logoDOM.offsetHeight);

		window.addEventListener('scroll', () => {
			scrollHandler(navigationDOM, logoDOM, headerDOM);
		});

		return () => {
			window.removeEventListener('scroll', () => {
				scrollHandler(navigationDOM, logoDOM, headerDOM);
			});
		};
	}, [router.pathname]);

	return (
		<S.DefaultPage>
			{router.pathname === '/' && <Header style={{ pointerEvents: 'none' }} />}
			<Logo id='logo' />
			<S.Wrapper>
				<Sidebar navigationOffset={navigationOffset} />
				<S.Main>
					<S.Content>{children}</S.Content>
					<Footer />
				</S.Main>
			</S.Wrapper>
		</S.DefaultPage>
	);
};

export { DefaultPage };
