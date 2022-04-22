import { S } from './index.styled';

const Form = ({ children, ...rest }) => {
	return <S.Form {...rest}>{children}</S.Form>;
};

export { Form };
