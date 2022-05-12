import React from 'react';
import '../../styles/components/layout/header.css'

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="images/logo_latinNails.jpg" width="100" alt="Logo de LatinNails"/>
                    <h1>Welcome to LatinNails Page</h1>
                </div>
            </div>
        </header>


        );
}

export default Header;