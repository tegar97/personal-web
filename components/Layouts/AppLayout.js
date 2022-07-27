import React from 'react';
import Navbar from '../Navbar';

export default function AppLayout({ children }) {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
        </div>
    );
}
