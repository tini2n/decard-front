import { Link } from 'ui/atoms';
import { FeatureImage } from 'ui/molecules';

import { S } from './index.styled';
import { Props } from './index.model';

import ArrowIcon from 'lib/icons/arrow.svg';

const FeatureLink: React.FunctionComponent<Props> = ({ href, imageSrc, linkLabel = null }) => {
	return (
		<Link href={href}>
			<S.Wrapper>
				<FeatureImage src={imageSrc} />
				{linkLabel && (
					<S.Label>
						<label>{linkLabel}</label>
						<span>
							<ArrowIcon />
						</span>
					</S.Label>
				)}
			</S.Wrapper>
		</Link>
	);
};

export { FeatureLink };
