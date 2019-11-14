import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
        return (
            <div>
                <Nav pills>
                    <NavItem>
                        <NavLink href="#" active>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" active>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" active>Work</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" active>Contact</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }



export default NavBar