import styled from 'styled-components';

const S = {
	Wrapper: styled.div.attrs(({ className = '' }) => ({ className: `feature-image mb-25 ${className}` }))`
		position: relative;
		border-radius: 30px;
		overflow: hidden;
		padding-bottom: 56.25%;

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateY(-50%) translateX(-50%);
			width: auto;
			height: auto;

			max-height: none;
			max-width: none;

			min-height: 100%;
			min-width: 100%;
		}
	`,
};

export { S };
