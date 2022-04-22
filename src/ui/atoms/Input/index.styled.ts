import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const S = {
	Label: styled(Form.Label)`
		font-size: 18px;
		line-height: 22px;
		margin-bottom: 5px;
		cursor: pointer;
	`,
	Control: styled(Form.Control)`
		padding: 1.25rem;
		border-radius: 0;
		border: 1px solid #000;
		background: transparent;
		font-size: 36px;
		line-height: 42px;

		${(p) =>
			p.as === 'textarea' &&
			`
			display: block;
			width: 100%;
			min-height: 220px;
			resize: none;
		`}

		:focus {
			background: transparent;
			box-shadow: 0 0 0 0px rgb(13 110 253 / 25%);
		}

		::placeholder {
			color: #000;
		}
	`,
};

export { S };
