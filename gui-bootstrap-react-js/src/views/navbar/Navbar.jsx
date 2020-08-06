import React, { Fragment } from "react";

// Componente Navbar Bootstrap
import Navbar from 'react-bootstrap/Navbar'

function NavbarBootstrap() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        React Bootstrap
                </Navbar.Brand>
            </Navbar>
        </Fragment>
    );
}

export default NavbarBootstrap;