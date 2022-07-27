import React from 'react';
import Link from './Link'

export default function NavLink({ anchor = false, href, children, ...props }) {
    return anchor ? (
        <a
            href={href}
            className="text-gray-300 hover:text-white transition duration-200 font-medium px-4 py-6"
        >
            {children}
        </a>
    ) : (
        <Link
            href={href}
            className="text-gray-300 hover:text-white transition duration-200 font-medium px-4 py-6"
        >
            {children}
        </Link>
    );
}
