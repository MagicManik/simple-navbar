import React from 'react';

const NavLinks = (props) => {
    const { name, link } = props.route;
    return (
        <li className='m-2 f font-medium text-2xl mr-20'>
            <a href={link}><span>{name}</span></a>
        </li>
    );
};

export default NavLinks;