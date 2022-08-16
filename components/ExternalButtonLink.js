import clsx from "clsx";
import React from "react";

export default function ExternalButtonLink({ className = "", href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={clsx(
                className,
                "inline-flex items-center gap-x-2 rounded-lg bg-white py-2 px-4 font-medium text-black shadow transition duration-300 hover:shadow-md lg:py-2.5 lg:px-5"
            )}
        >
            {children}
        </a>
    );
}
