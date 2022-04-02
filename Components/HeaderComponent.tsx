import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import { FcPlanner } from 'react-icons/fc';

interface Props {
    children: any;
}

const HeaderComponent: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link href='/' passHref={true}>
                        <Navbar.Brand>
                            <FcPlanner />{' '}
                            Planno.me
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link href='/fluxo-caixa' passHref={true}>
                                <Nav.Link> Fluxo de Caixa </Nav.Link>
                            </Link>
                            <Link href='/parcelas' passHref={true}>
                                <Nav.Link> Parcelas </Nav.Link>
                            </Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"> Configurações </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes"> Víctor Cândido </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container style={{ marginTop: '20px' }}>
                { children }
            </Container>
        </>
    );
}

export default HeaderComponent;