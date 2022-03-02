import { Props } from './index.model';

const Image: React.FunctionComponent<Props> = ({ src, alt = '', ...rest }) => {
	return <img {...rest} src={src} alt={alt} />;
};

export { Image };
