import { S } from './index.styled';

const ContentWrapper = ({ children, className = '', ...rest }) => {
	return (
		<S.Wrapper {...rest} className={className}>
			{children}
		</S.Wrapper>
	);
};

export { ContentWrapper };
