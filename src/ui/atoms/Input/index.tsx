import { Form } from 'react-bootstrap';

import { S } from './index.styled';

const Input = ({ type = 'text', placeholder = '', label, id = '', register, ...rest }) => {
	return (
		<Form.Group>
			{label && <S.Label htmlFor={id}>{label}</S.Label>}
			<S.Control type={type} placeholder={placeholder} id={id} {...register} {...rest} />
		</Form.Group>
	);
};

export { Input };
