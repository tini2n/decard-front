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

		:focus {
			background: transparent;
		}

		::placeholder {
			color: #000;
		}
	`,
};

export { S };
