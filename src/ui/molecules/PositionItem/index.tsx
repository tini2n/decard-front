import { S } from './index.styled';
import { P } from './index.model';

const PositionItem: React.FunctionComponent<P> = ({ title, icon = null, className = '', ...rest }) => {
	return (
		<S.Container className={className} {...rest}>
			<S.Title>{title}</S.Title>
			{icon && icon}
		</S.Container>
	);
};

export { PositionItem };
