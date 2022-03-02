import NextLink from 'next/link';

import { Props } from './index.model';
import { S } from './index.styled';

const Link: React.FunctionComponent<Props> = ({
	children,
	href = '',
	className = '',
	style = {},
	id = '',
	...rest
}) => {
	return (
		<NextLink {...rest} href={href}>
			<S.Link className={className} id={id} style={style}>
				{children}
			</S.Link>
		</NextLink>
	);
};

export { Link };
