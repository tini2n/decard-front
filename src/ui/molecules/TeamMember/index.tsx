import { FeatureImage, LabeledTitle } from 'ui/molecules';

import { Props } from './index.model';
import { S } from './index.styled';

const TeamMember: React.FunctionComponent<Props> = ({ imageSrc, title, position, description = null }) => {
	return (
		<S.TeamMember>
			<FeatureImage src={imageSrc} alt={title} />
			<LabeledTitle label={position} level='h2'>
				{title}
			</LabeledTitle>
			{description && <p>{description}</p>}
		</S.TeamMember>
	);
};

export { TeamMember };
