import React from "react";
import Container from "../Container";
import Hero from "../Hero";
import Logo from "../Logo";

export default function AppLayout({ children }) {
    return (
        <div className="border-t-4 border-indigo-400">
            <Hero />
            <div>{children}</div>
            <div className="-mt-16 bg-gradient-to-b from-gray-100 via-white to-white py-10">
                <Container>
                    <Logo className="w-40 fill-black" />
                </Container>
            </div>
        </div>
    );
}
