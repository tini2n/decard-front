import { S } from './index.styled';

const Heading = ({ children, description = '', className = '', ...rest }) => {
	return (
		<S.Container className={className} {...rest}>
			<S.Heading style={{ marginBottom: description ? '40px' : '0' }}>{children}</S.Heading>
			{description && <p>{description}</p>}
		</S.Container>
	);
};

export { Heading };
