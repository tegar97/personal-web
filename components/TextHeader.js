import clsx from "clsx";
import React from "react";

export default function TextHeader({ className = "", children }) {
    return (
        <div className={clsx(className)}>
            <h1 className="mb-2 text-xl font-bold lg:mb-4 lg:text-3xl">
                {children}
            </h1>
            <div className="h-0.5 w-16 rounded-full bg-indigo-400"></div>
        </div>
    );
}
