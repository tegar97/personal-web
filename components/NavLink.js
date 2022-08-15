import React from "react";
import Link from "./Link";

export default function NavLink({ anchor = false, href, children, ...props }) {
    return anchor ? (
        <a
            href={href}
            className="px-4 py-6 font-medium text-gray-500 transition duration-200 hover:text-black"
        >
            {children}
        </a>
    ) : (
        <Link
            href={href}
            className="px-4 py-6 font-medium text-gray-500 transition duration-200 hover:text-white"
        >
            {children}
        </Link>
    );
}
