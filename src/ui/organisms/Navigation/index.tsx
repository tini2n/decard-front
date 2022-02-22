import { S } from './index.styled';

const Navigation = () => {
	return (
		<nav className='navigation'>
			<S.Link href='/products'>PRODUCTS</S.Link>
			<S.Link href='/team'>TEAM</S.Link>
			<S.Link href='/press'>PRESS</S.Link>
			<S.Link href='/contacts'>CONTACTS</S.Link>
			<S.Link href='/for-developers'>FOR DEVELOPERS</S.Link>
			<S.Link href='/for-partners'>FOR PARTNERS</S.Link>
		</nav>
	);
};

export { Navigation };
