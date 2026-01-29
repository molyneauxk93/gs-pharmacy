import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <div className="caveat-header">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/"><img
                        alt=""
                        src="src/assets/jamaica-flag-icon.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}Great George Street Pharmacy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/"><span className="nav-item">Home</span></Nav.Link>
                            {/* <Nav.Link href="/about"><span className="nav-item">About</span></Nav.Link> */}
                            <Nav.Link href="/store"><span className="nav-item">Store</span></Nav.Link>
                            <Nav.Link href="/contact"><span className="nav-item">Contact Us</span></Nav.Link>
                            <Nav.Link href="/cart"><span className="nav-item">MyCart</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header