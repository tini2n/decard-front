import styled from 'styled-components';

const S = {
	Wrapper: styled.div`
		label {
			position: relative;
			top: 5px;
			margin-right: 40px;
			font-size: 20px;
			line-height: 24px;
			font-style: italic;
			vertical-align: top;
			text-transform: uppercase;
		}

		label,
		h1,
		h2,
		h3,
		h4 {
			display: inline;
		}

		h1,
		h2,
		h3,
		h4 {
			font-size: 64px;
			line-height: 1;
			text-transform: uppercase;
		}
	`,
};

export { S };
