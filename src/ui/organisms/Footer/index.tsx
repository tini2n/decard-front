import { useRouter } from 'next/router';

import { S } from './index.styled';

import ArrowIcon from 'lib/icons/arrow.svg';

const Footer = ({}) => {
	const router = useRouter();

	const isContactPage = router.pathname === '/contacts';

	return (
		<S.Footer>
			{isContactPage ? (
				<p style={{ fontSize: '24px', lineHeight: '55px', margin: 0 }}>
					<ArrowIcon style={{ transform: 'rotate(180deg) scale(.7)', marginBottom: '5px' }} /> Join Our
					Community
				</p>
			) : (
				<>
					<p className='mb-0 me-3'>info@decard.de</p>
					<p className='mb-0'>(+3087)840 21 93</p>
				</>
			)}
		</S.Footer>
	);
};

export { Footer };
