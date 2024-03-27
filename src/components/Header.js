import styles from "./Header.module.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
// import Image from "react-bootstrap/Image";

function Header() {
  return (
    <>
      <Navbar
        data-bs-theme='dark'
        bg='primary'
        expand='lg'
        className={`${styles.navBar} flex-column pb-0 fixed`}
      >
        {/* upper row */}
        <Container className={styles.bbPhat} fluid>
          <Navbar.Brand
            as={Link}
            to='/'
            style={{
              backgroundColor: "#fff",
              padding: "4px",
              borderRadius: "3px",
            }}
          >
            <img
              src='https://nmpsia.com/images/logo_2022.jpg'
              width='auto'
              height='60px'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-dark-example' />
          <Navbar.Collapse id='navbar-dark-example'>
            <Nav className={`${styles.navLinkList} ms-auto`}>
              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to='/board-login'>
                Board Login
              </Nav.Link>
              <Nav.Link as={Link} to='/search'>
                Search
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* bottom row */}
        <Container className={styles.bbPhat} fluid>
          <Navbar.Collapse>
            {/* bottom left */}
            <Nav className='me-auto'>
              <NavDropdown id='collapsible-nav-dropdown' title='NMPSIA'>
                <NavDropdown.Item as={Link} to='/the-authority'>
                  NMPSIA - The Authority
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/benefits-division'>
                  NMPSIA - Benefits Division
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/risk-division'>
                  NMPSIA - Risk Division
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item as={Link} to='/wellness-programs'>
                  NMPSIA - Wellness
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id='nav-dropdown-dark-example' title='EMPLOYERS'>
                <NavDropdown.Item as={Link} to='/employers/enrollment'>
                  NMPSIA - Benefit Enrollment & Forms
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/employers/carriers-info'>
                  NMPSIA - Carrier Benefits Information
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/wellness-programs'>
                  NMPSIA - Wellness
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item as={Link} to='/employers/premiums'>
                  NMPSIA - Benefit Premiums
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/program-info'>
                  NMPSIA - Vital Program Info
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/training'>
                  NMPSIA - Training Tutorials & Videos
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/covid-19'>
                  COVID-19 Information
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id='nav-dropdown-dark-example' title='EMPLOYEES'>
                <NavDropdown.Item as={Link} to='/employees/enrollment'>
                  NMPSIA - Benefit Enrollment & Forms
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/employees/carriers-info'>
                  NMPSIA - Carrier Benefits Information
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/wellness-programs'>
                  NMPSIA - Wellness
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/employees/premiums'>
                  NMPSIA - Benefit Premiums
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/plan-comparison'>
                  NMPSIA - Medical Plan Comparison Chart
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to='/covid-19'>
                  COVID-19 Information
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to='https://nmpsiaonline.nmpsia.com/'
                target='_blank'
              >
                User Login
              </Nav.Link>
            </Nav>

            {/* bottom right */}
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/risk-division'>
                Risk Division
              </Nav.Link>
              <Nav.Link as={Link} to='/behavioral-health'>
                Behavioral Health
              </Nav.Link>
              <Nav.Link as={Link} to='/procurements'>
                NMPSIA Procurements
              </Nav.Link>
              <Nav.Link as={Link} to='/IPRA'>
                IPRA Request
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
