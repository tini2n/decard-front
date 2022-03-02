import { Image } from 'ui/atoms';

import { S } from './index.styled';
import { Props } from './index.model';

const FeatureImage: React.FunctionComponent<Props> = ({ src, alt = '', children }) => {
	return (
		<S.Wrapper>
			<Image src={src} alt={alt} />
			{children}
		</S.Wrapper>
	);
};

export { FeatureImage };
