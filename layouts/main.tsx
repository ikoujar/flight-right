import Header from './partials/header';
import { Container } from 'react-bootstrap';
import Head from 'next/head';


type Props = {
    children?: any,
    title: string,
}
export default function Main(
    { title, children }: Props
) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <Container className='my-4'>
                {children}
            </Container>
        </>
    );
}
