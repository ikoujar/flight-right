import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Link href={'/'} passHref>
          <Navbar.Brand>FlightRightTest</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}
