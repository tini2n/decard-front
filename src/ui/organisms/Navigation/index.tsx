import { useRouter } from 'next/router';

import { S } from './index.styled';

const Navigation = ({ fixedOffset }) => {
	const router = useRouter();

	return (
		<S.Navigation fixedOffset={fixedOffset} className={router.pathname === '/' ? '' : 'fixed'}>
			<S.Link href='/products' className={router.pathname === '/products' ? 'active' : ''}>
				PRODUCTS
			</S.Link>
			<S.Link href='/team' className={router.pathname === '/team' ? 'active' : ''}>
				TEAM
			</S.Link>
			<S.Link href='/press' className={router.pathname === '/press' ? 'active' : ''}>
				PRESS
			</S.Link>
			<S.Link href='/contacts' className={router.pathname === '/contacts' ? 'active' : ''}>
				CONTACTS
			</S.Link>
			<S.Link href='/for-developers' className={router.pathname === '/for-developers' ? 'active' : ''}>
				FOR DEVELOPERS
			</S.Link>
			<S.Link href='/for-partners' className={router.pathname === '/for-partners' ? 'active' : ''}>
				FOR PARTNERS
			</S.Link>
		</S.Navigation>
	);
};

export { Navigation };
