import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, Collapse, NavbarToggler } from 'reactstrap';
import logo from '../graphics/airli-logo-black.png';


function Navigation()
{  
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(prevState => !prevState);

    return(
        <Navbar bg='light' expand='md'>
            <NavbarBrand href='/' className='mr-auto'><img src={logo} alt='Airli' width='100px'/></NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2" >
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
            </NavbarToggler>
            <Collapse isOpen={!collapsed} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Other</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigation;