import { Link } from 'ui/atoms';
import { FeatureImage } from 'ui/molecules';

import { S } from './index.styled';
import { Props } from './index.model';

import ArrowIcon from 'lib/icons/arrow.svg';

const ProductItem: React.FunctionComponent<Props> = ({ imageSrc, href, title, description = null, ...rest }) => {
	return (
		<Link href={href}>
			<S.ProductItem {...rest}>
				<FeatureImage src={imageSrc}>
					<label>
						<ArrowIcon />
					</label>
				</FeatureImage>
				<S.TextContainer>
					<h2>{title}</h2>
					{description && <p>{description}</p>}
				</S.TextContainer>
			</S.ProductItem>
		</Link>
	);
};

export { ProductItem };
