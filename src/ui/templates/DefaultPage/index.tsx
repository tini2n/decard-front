import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { changeLogoSize } from 'lib/store/actions/ui';

import { Sidebar, Footer } from 'ui/organisms';

import { S } from './index.styled';

const selectUI = (state) => state.ui;

const DefaultPage: React.FunctionComponent = ({ children }) => {
	// const dispatch = useDispatch();
	// const uiStore = useSelector(selectUI);

	const [isLogoShrinked, setIsLogoShrinked] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	// console.log(isLogoShrinked);

	const handleScroll = () => {
		const offset = 50;

		// if (window.pageYOffset > offset && !uiStore.isLogoShrinked) {
		// 	dispatch(changeLogoSize(true));
		// } else {
		// 	dispatch(changeLogoSize(false));
		// 	console.log(window.pageYOffset);
		// }

		if (window.pageYOffset > offset && !isLogoShrinked) {
			setIsLogoShrinked(true);
		} else {
			setIsLogoShrinked(false);
		}
	};

	const getHeaderHeight = () => {
		console.log(document.getElementById('header')?.offsetHeight);
		const headerEl = document.getElementById('header');
		setHeaderHeight(headerEl?.offsetHeight || 0);
	};

	useEffect(() => {
		const headerEl = document.getElementById('header');
		// console.log(headerEl?.offsetHeight);

		headerEl?.addEventListener('transitionend', getHeaderHeight);

		return () => {
			headerEl?.removeEventListener('transitionend', getHeaderHeight);
		};
	}, [isLogoShrinked]);

	useEffect(() => {
		const headerEl = document.getElementById('header');
		setHeaderHeight(headerEl?.offsetHeight || 0);

		const handleScrollEvent = () => {
			handleScroll();
		};

		window.addEventListener('scroll', handleScrollEvent);

		return () => {
			window.removeEventListener('scroll', handleScrollEvent);
		};
	}, []);

	return (
		<S.DefaultPage>
			<Sidebar isLogoShrinked={isLogoShrinked} />
			<S.Wrapper>
				<S.Main headerHeight={headerHeight}>
					<S.Content>{children}</S.Content>
					<Footer />
				</S.Main>
			</S.Wrapper>
		</S.DefaultPage>
	);
};

// export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
export default DefaultPage;
