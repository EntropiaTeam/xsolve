import React, { Component } from 'react';
import Menu from './menu/menu';


class Header extends Component {

    render () {
        return (
            <div className="header">
                <Menu />
            </div>
        );
    }
}

export default Header;