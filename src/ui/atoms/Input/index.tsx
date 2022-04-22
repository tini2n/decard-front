import { Form } from 'react-bootstrap';

import { S } from './index.styled';

const Input = ({ type = 'text', placeholder = '', label, id = '', register, ...rest }) => {
	return (
		<Form.Group>
			{label && <S.Label htmlFor={id}>{label}</S.Label>}
			{type === 'textarea' ? (
				<S.Control as='textarea' placeholder={placeholder} id={id} {...register} {...rest} />
			) : (
				<S.Control type={type} placeholder={placeholder} id={id} {...register} {...rest} />
			)}
		</Form.Group>
	);
};

export { Input };
