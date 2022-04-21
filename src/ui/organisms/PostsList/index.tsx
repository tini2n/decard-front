import { Container } from 'react-bootstrap';

import { Post } from 'ui/molecules';

const PostsList = ({}) => {
	return (
		<Container className='p-0' style={{ marginBottom: '100px' }}>
			<Post className='pt-0' />
			<Post />
			<Post />
		</Container>
	);
};

export { PostsList };
