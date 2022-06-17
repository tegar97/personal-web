import React from 'react';
import Navbar from '../Navbar';

export default function AppLayout({ children }) {
    return (
        <div>
            <div>{children}</div>
        </div>
    );
}
