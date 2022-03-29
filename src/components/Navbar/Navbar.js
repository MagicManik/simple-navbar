import React, { useState } from 'react';
import NavLinks from '../NavLinks/NavLinks';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 1, name: 'Service', link: '/service' },
        { id: 1, name: 'Contract', link: '/home' }
    ]
    return (
        <nav className='bg-indigo-500'>
            {/* !open মানে current value কে অপজিট করা। অর্থাৎ false থাকলে সেটাকে true করবে এবং true থাকলে সেটাকে false করবে। */}
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>

                {/* টার্নারি অপারেটর। True হলে প্রথম কাজটা করবে। অর্থাৎ x icon টা দেখাবে। আর ফলস হলে কোলন এর পরের কাজটা করবে অর্থাৎ menu icon টা দেখাবে। */}

                {open ? <XIcon></XIcon> : <MenuAlt1Icon></MenuAlt1Icon>}

            </div>

            <ul className={`md:flex justify-center bg-indigo-500 w-full absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-150px]'}`}>
                {
                    routes.map(route => <NavLinks key={route.id} route={route}></NavLinks>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;