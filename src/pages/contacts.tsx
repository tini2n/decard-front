import { Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { ContentWrapper } from 'ui/molecules';
import { Heading, Form, Input, Button } from 'ui/atoms';

const Contacts = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<ContentWrapper style={{ paddingTop: '0' }}>
			<Heading className='mb-65 pb-65'>
				Demonstrate the Capabilities of Your Company as a Technology Leader
			</Heading>
			<Row className='mb-6'>
				<Col md={6}>
					<p className='d-block heading m-0'>info@decard.io</p>
					<p className='d-block heading m-0'>work@decard.io</p>
				</Col>
				<Col md={6}>
					<p className='d-block heading m-0'>(+3087)840 21 93</p>
				</Col>
			</Row>
			<p className='heading' style={{ marginBottom: '1.25rem' }}>
				If you’d like to receive more information about our projects and initiatives subscribe here.
			</p>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Col md={7}>
						<Input
							label='Email address'
							placeholder='you email here'
							type='email'
							id='email'
							register={register('email', { required: true })}
						/>
					</Col>
					<Col md={5} style={{ paddingTop: '27px', paddingLeft: '0' }}>
						<Button type='submit' withArrow style={{ width: '100%' }}>
							Subscribe
						</Button>
					</Col>
				</Row>
			</Form>
		</ContentWrapper>
	);
};

export default Contacts;
