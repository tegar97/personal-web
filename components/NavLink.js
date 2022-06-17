import Link from 'next/link';
import React from 'react';

export default function NavLink({ href, children }) {
    return (
        <Link href={href}>
            <a className="text-black py-4 px-4 font-medium hover:text-blue-500">{children}</a>
        </Link>
    );
}
