import React from 'react';
import Container from './Container';
import Link from './Link';
import Logo from './Logo'
import NavLink from './NavLink';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 border-b border-gray-700">
            <div className="mx-auto lg:max-w-screen-2xl px-4">
                <div className="flex items-center">
                    <Link
                        className="text-white font-semibold pr-4"
                        href="/"
                    >
                        <Logo className='w-28 mt-0.5'/>
                    </Link>
                    <NavLink anchor href="https://parsinta.com/series">
                        My Series
                    </NavLink>
                    <NavLink anchor href="https://parsinta.com/ebooks">
                        My Books
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
