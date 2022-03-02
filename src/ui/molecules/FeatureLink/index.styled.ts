import styled from 'styled-components';

const S = {
	Wrapper: styled.div.attrs(() => ({ className: 'feature-link' }))`
		position: relative;
	`,
	Label: styled.div`
		position: absolute;
		display: flex;
		text-align: center;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
		text-transform: uppercase;
		pointer-events: none;

		label {
			font-size: 36px;
			line-height: 46px;
			color: #000;
			padding: 5px 10px;
			margin-right: 5px;
		}

		span,
		label {
			background: #fff;
		}

		span {
			display: flex;
			align-items: center;
			padding: 0 26px;
			border-radius: 30px;
		}
	`,
};

export { S };
