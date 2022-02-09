import Link from 'next/link';
import Head from 'next/head';

const Test = () => {
	return (
		<>
			<Head>
				<title>DECARD - test</title>
			</Head>
			<h1>Test</h1>
			<Link href='/'>link</Link>
		</>
	);
};

export default Test;
