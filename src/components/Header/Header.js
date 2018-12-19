import { Jumbotron } from 'react-bootstrap';
import './Header.css'
import React from 'react';
const Header = props => {
    return (
        <div className="header">
            <Jumbotron className="jumbo">
                <h1>Task Management Application</h1>
            </Jumbotron>
        </div>
    );
}

export default Header;