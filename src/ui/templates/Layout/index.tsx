import { Head } from 'ui/organisms';

const Layout = ({ children }) => {
	return (
		<>
			<Head />
			<body id='body'>{children}</body>
		</>
	);
};

export { Layout };
