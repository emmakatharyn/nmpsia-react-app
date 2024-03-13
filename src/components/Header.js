import styles from "./Header.module.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <>
      <Navbar
        data-bs-theme='dark'
        bg='primary'
        expand='lg'
        className='flex-column'
      >
        {/* upper row */}
        <Container className={styles.bbPhat} fluid>
          <Navbar.Brand href='#home' className='ps-2'>
            NMPSIA - React
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-dark-example' />
          <Navbar.Collapse id='navbar-dark-example'>
            <Nav className='ms-auto'>
              <Nav.Link href='#link'>About</Nav.Link>
              <Nav.Link href='#link'>Contact</Nav.Link>
              <Nav.Link href='#link'>Board Login</Nav.Link>
              <Nav.Link href='#search'>Search</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* bottom row */}
        <Container className={styles.bbPhat} fluid>
          <Navbar.Collapse>
            {/* bottom left */}
            <Nav className='me-auto'>
              <NavDropdown id='collapsible-nav-dropdown' title='NMPSIA'>
                <NavDropdown.Item href='#action/3.1'>
                  NMPSIA - The Authority
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  NMPSIA - Benefits Division
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  NMPSIA - Risk Division
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href='#action/3.4'>
                  NMPSIA - Wellness
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className={styles.blueBackground}
                id='nav-dropdown-dark-example'
                title='EMPLOYERS'
              >
                <NavDropdown.Item href='#action/3.1'>
                  NMPSIA - Benefit Enrollment & Forms
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  NMPSIA - Carrier Benefits Information
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  NMPSIA - Wellness
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href='#action/3.4'>
                  NMPSIA - Benefit Premiums
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>
                  NMPSIA - Vital Program Info
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>
                  NMPSIA - Training Tutorials & Videos
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>
                  COVID-19 Information
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className={styles.blueBackground}
                id='nav-dropdown-dark-example'
                title='EMPLOYEES'
              >
                <NavDropdown.Item href='#action/3.1'>
                  NMPSIA - Benefit Enrollment & Forms
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  NMPSIA - Carrier Benefits Information
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  NMPSIA - Wellness
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>
                  NMPSIA - Benefit Premiums
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>
                  NMPSIA - Medical Plan Comparison Chart
                </NavDropdown.Item>

                <NavDropdown.Item href='#action/3.4'>
                  COVID-19 Information
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#link' className={styles.navLink}>
                User Login
              </Nav.Link>
            </Nav>

            {/* bottom right */}
            <Nav className='ms-auto'>
              <Nav.Link href='#link' className={styles.navLink}>
                Risk Division
              </Nav.Link>
              <Nav.Link href='#link' className={styles.navLink}>
                Behavioral Health
              </Nav.Link>
              <Nav.Link href='#link' className={styles.navLink}>
                NMPSIA Procurements
              </Nav.Link>
              <Nav.Link href='#link' className={styles.navLink}>
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
