import React from 'react';
import NavLink from './NavLink';

const navigatorStyle = {
    display: 'flex',
    padding: 0
};

const itemStyle = {
    padding: '0px 4px'
};

export default ({ items }) => {
    const links = items.map(({ link, name }) => (
        <div style={itemStyle}>
            <NavLink link={link} name={name} />
        </div>
    ));

    return (
        <nav>
            <ul style={navigatorStyle}>
                { links }
            </ul>
        </nav>
    );
};