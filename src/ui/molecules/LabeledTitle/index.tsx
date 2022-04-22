import { S } from './index.styled';
import { Props } from './index.model';

const LabeledTitle: React.FunctionComponent<Props> = ({ level = 'h1', label, children, className = '', ...rest }) => {
	let Title: React.FunctionComponent;

	switch (level) {
		case 'h1':
			Title = ({ children }) => <h1>{children}</h1>;
			break;

		case 'h2':
			Title = ({ children }) => <h2>{children}</h2>;
			break;

		case 'h3':
			Title = ({ children }) => <h3>{children}</h3>;
			break;

		default:
			Title = ({ children }) => <h1>{children}</h1>;
			break;
	}

	return (
		<S.Wrapper className={className} {...rest}>
			<label>{label}</label>
			<Title>{children}</Title>
		</S.Wrapper>
	);
};

export { LabeledTitle };
