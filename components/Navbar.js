import React from "react";
import Container from "./Container";
import Link from "./Link";
import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Navbar() {
    return (
        <nav className="relative bg-white shadow">
            <div className="mx-auto px-4 lg:max-w-screen-2xl">
                <div className="flex items-center">
                    <Link className="pr-4 font-semibold text-white" href="/">
                        <Logo className="mt-0.5 w-28 fill-gray-900" />
                    </Link>
                    <NavLink anchor href="/articles">
                        Articles
                    </NavLink>
                    <NavLink anchor href="https://parsinta.com/series">
                        Screencasts
                    </NavLink>
                    <NavLink anchor href="https://parsinta.com/ebooks">
                        Books
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
