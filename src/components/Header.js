import React, { useState } from 'react';

import styled from 'styled-components';
import { Container, Row, Collapse, Nav, Navbar, NavItem, Button, NavbarToggler } from 'reactstrap';

import useWindowWidth from '../hooks/useWindowWidth';
import { A } from 'hookrouter';

const Header = () => {

    const device = useWindowWidth() > 992 ? "desktop" : "mobile";

    /**
     * Navbar state
     */
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    /**
     * Styled Components
     */
    // Toggler
    const ToggleWrapper = styled.div`
        button {
            border: none;
        }
    `;

    // Nav
    const NavWrapper = styled.div`
        position: fixed;
        width: 100%;
        z-index: 100;
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
    const Title = () => <TitleWrapper device={device} className={device === "mobile" ? 'col-8' : ''}><A className='navbar-brand' href='/home'>Ty and Tiffany</A></TitleWrapper>
    const RSVPButton = () => <RSVPWrapper device={device} className={device === "mobile" ? 'col-12' : ''}><Button><A className='nav-link' href='/rsvp'>RSVP</A></Button></RSVPWrapper>

    /**
     * Navigation
     */
    return (
        <NavWrapper>
            <Navbar dark expand='lg'>
                <Container> 
                {
                    device === "mobile" ? 
                        <Row className='d-flex m-auto w-100'>
                            <ToggleWrapper className='col-2 align-self-center p-0'>
                                <NavbarToggler onClick={toggle} />
                            </ToggleWrapper>
                            <Title />
                            <RSVPButton />
                        </Row>
                    : null
                }
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='row d-flex m-auto w-100' navbar>    
                            <NavItem className='col-12 col-lg-2 align-self-center text-center'>
                                <A className='nav-link' href='/home'>Home</A>
                            </NavItem>
                            <NavItem className='col-12 col-lg-2 align-self-center text-center'>
                                <A className='nav-link' href='/registry'>Registry</A>
                            </NavItem>
                            { 
                                device === "desktop" ? 
                                    <NavItem className='col-4 align-self-center'>
                                        <Title />
                                    </NavItem>
                                : null
                            }
                            <NavItem className='col-12 col-lg-2 align-self-center text-center'>
                                <A className='nav-link' href='/travel'>Travel</A>
                            </NavItem>
                            { 
                                device === "desktop" ? 
                                    <NavItem className='col-2 align-self-center'>
                                        <RSVPButton />
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