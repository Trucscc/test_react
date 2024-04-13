import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = () =>{
  const navigate = useNavigate();

  const handleLogin =() =>{
    navigate('/login');
  }
  
  return (
    <Navbar className="bg-body-tertiary" expand="lg" >
      <Container>
        {/* <Navbar.Brand href="#home">TH-Logo</Navbar.Brand> */}
        <NavLink to="/" className="navbar-brand">AuC</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/users" className="nav-link">Users</NavLink>
            <NavLink to="/admins" className="nav-link">Admin</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn-search'variant="outline-success">Search </Button> &nbsp;
          </Form> 
          <Nav>
            {/* <button className='btn-login'>Log_In</button>
            <button className='btn-signup'>Sign_Up</button> */}
            <Button className='btn-login'onClick={()=> handleLogin()}>Log_In</Button>
            {/* <Button className= 'btn-signup'>Sign_Up</Button> */}
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=> handleLogin()}>Log_In</NavDropdown.Item>
              <NavDropdown.Item>Sign_Up</NavDropdown.Item>
              <NavDropdown.Item>About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Log_Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//default Header;