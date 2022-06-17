import React from 'react'
export default function Container({ children }) {
    return (
        <div className="mx-auto max-w-screen-md">
            {children}
        </div>
    )
}
