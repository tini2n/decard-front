import { Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { ContentWrapper, PositionItem } from 'ui/molecules';
import { Heading, Form, Input, Button } from 'ui/atoms';

import UiUxIcon from 'lib/icons/ui-ux-designer.svg';
import FrontEndIcon from 'lib/icons/front-end.svg';
import RegionalManagerIcon from 'lib/icons/regional-manager.svg';
import BackEndIcon from 'lib/icons/back-end.svg';
import PublicRelationsIcon from 'lib/icons/public-relations.svg';
import StrategistIcon from 'lib/icons/strategist.svg';

const ForDevelopers = ({}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<ContentWrapper style={{ paddingTop: '0' }}>
			<Heading
				description="We're always on the lookout for the best talent! If you'd like to get in touch, check out our open positions."
				style={{ borderBottom: '0' }}
				className='mb-4125'
			>
				We develop innovative software that change people lives for the better
			</Heading>
			<Row>
				<Col md={4}>
					<PositionItem title='UI/UX Designer' icon={<UiUxIcon />} />
				</Col>
				<Col md={4}>
					<PositionItem title='Front End Developer' icon={<FrontEndIcon />} />
				</Col>
				<Col md={4}>
					<PositionItem title='Assistant Regional Manager ' icon={<RegionalManagerIcon />} />
				</Col>
			</Row>
			<Row style={{ marginBottom: '120px' }}>
				<Col md={4}>
					<PositionItem
						title='Back End Developer'
						icon={<BackEndIcon />}
						style={{ borderBottom: '1px solid #000' }}
					/>
				</Col>
				<Col md={4}>
					<PositionItem
						title='Public Relationship'
						icon={<PublicRelationsIcon />}
						style={{ borderBottom: '1px solid #000' }}
					/>
				</Col>
				<Col md={4}>
					<PositionItem
						title='Strategist'
						icon={<StrategistIcon />}
						style={{ borderBottom: '1px solid #000' }}
					/>
				</Col>
			</Row>
			<h2 className='uppercase super mb-4'>
				If you didn`t find a vacancy, but feel like you would be a perfect fit for our team? Feel free to
				contact us!
			</h2>
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

export default ForDevelopers;
