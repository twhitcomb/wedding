import React, { useState } from 'react';

import styled from 'styled-components';
import { Container, Row, Collapse, Nav, Navbar, NavItem, NavLink, Button, NavbarBrand, NavbarToggler } from 'reactstrap';

const Header = (props) => {

    /**
     * Navbar state
     */
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // Device Type
    const device = props.device;

    /**
     * Styled Components
     */
    // Toggler
    const ToggleWrapper = styled.div`
        padding: 0;
        button {
            border: none;
        }
    `;

    // Nav
    const NavWrapper = styled.div`
        nav {
            background-color: var(--burgundy);
        }
    `;
    
    // Ty and Tiffany
    const TitleWrapper = styled.div`
        text-align: center;
        a {
            margin: auto;
            font-family: 'DK Otago', sans-serif;
            font-size: ${() => device === "mobile" ? "1.9" : "2.5"}em;
        }
    `;

    // RSVP Button
    const RSVPWrapper = styled.div`
        button {
            width: 100%;
            padding: 6px;
            font-weight: bold;
            background-color: var(--orange);
            border: 1px solid var(--orange);
            &:hover {
                background-color: var(--teal);
            }
        }
    `;

    /**
     * Helper Components
     */
    const Title = () => <TitleWrapper device={device} className={device === "mobile" ? 'col-8' : ''}><NavbarBrand href='/home'>Ty and Tiffany</NavbarBrand></TitleWrapper>
    const RSVP = () => <RSVPWrapper device={device} className={device === "mobile" ? 'col-12' : ''}><Button><NavLink href='/rsvp'>RSVP</NavLink></Button></RSVPWrapper>

    /**
     * Navigation
     */
    return (
        <NavWrapper>
            <Navbar dark expand='lg'>
                <Container> 
                {
                    props.device === "mobile" ? 
                        <Row className='d-flex m-auto w-100'>
                            <ToggleWrapper className='col-2 align-self-center'>
                                <NavbarToggler onClick={toggle} />
                            </ToggleWrapper>
                            <Title />
                            <RSVP />
                        </Row>
                    : null
                }
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='row d-flex m-auto w-100' navbar>    
                            <NavItem className='col-12 col-lg-2 align-self-center text-center'>
                                <NavLink href='/home'>Home</NavLink>
                            </NavItem>
                            <NavItem className='col-12 col-lg-2 align-self-center text-center'>
                                <NavLink href='/registry'>Registry</NavLink>
                            </NavItem>
                            { 
                                props.device === "desktop" ? 
                                    <NavItem className='col-4 align-self-center'>
                                        <Title />
                                    </NavItem>
                                : null
                            }
                            <NavItem className='col-12 col-lg-2 align-self-center text-center'>
                                <NavLink href='/travel'>Travel</NavLink>
                            </NavItem>
                            { 
                                props.device === "desktop" ? 
                                    <NavItem className='col-2 align-self-center'>
                                        <RSVP />
                                    </NavItem>
                                : null
                            }
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </NavWrapper>
    );
}

export default Header;