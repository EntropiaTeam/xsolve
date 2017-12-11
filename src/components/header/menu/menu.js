import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render () {
        return (
        <nav>
            <ul>
                <li><Link to='/'>Main</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/todos'>Todos</Link></li>
            </ul>
        </nav>
        );
    }
}

export default Menu;