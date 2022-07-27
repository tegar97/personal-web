import React from 'react';
import Container from '../Container'
import Logo from '../Logo'
import Navbar from '../Navbar';

export default function AppLayout({ children }) {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
            <div className="border-t border-gray-700 py-16 mt-8 lg:mt-16">
                <Container>
                    <Logo/>
                </Container>
            </div>
        </div>
    );
}
