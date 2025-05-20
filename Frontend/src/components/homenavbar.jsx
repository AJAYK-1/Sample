import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function HomeNavbar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">MySite</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/commonhome">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">User Registration</Nav.Link>
                        <Nav.Link href="/adminlogin">Admin Login</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    );
}

export default HomeNavbar;