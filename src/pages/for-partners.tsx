import { Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { ContentWrapper } from 'ui/molecules';
import { Heading, Form, Input, Button } from 'ui/atoms';

const ForPartners = ({}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<ContentWrapper style={{ paddingTop: '0' }}>
			<Heading
				description='Still handling IT on your own? You’ve got better things to do than figure out the right tech support for your business. Let Decard handle getting you the top-notch solution you deserve with our network of innovative products. We always strive to give our clients significant benefits, because we realize that your achievements are the key to our success.'
				style={{ borderBottom: '0' }}
			>
				Demonstrate the Capabilities of Your Company as a Technology Leader
			</Heading>
			<Form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '120px' }}>
				<Input
					label='Full name'
					id='fullName'
					placeholder='Full name'
					register={register('fullName', { required: true })}
					className='mb-4'
				/>
				<Input
					label='Email address'
					type='email'
					id='email'
					placeholder='Email address'
					register={register('email', { required: true })}
					className='mb-4'
				/>
				<Input
					label='How can we help?  '
					type='textarea'
					id='message'
					placeholder='Your message'
					register={register('message', { required: true })}
					className='mb-4'
				/>
				<Button type='submit' withArrow style={{ width: '100%' }}>
					Submit
				</Button>
			</Form>
		</ContentWrapper>
	);
};

export default ForPartners;
