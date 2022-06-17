import React from 'react'
import Container from './Container'
import Link from './Link'
import NavLink from './NavLink'

export default function Navbar() {
  return (
    <nav className='py-3 border-b border-slate-800'>
        <Container>
            <div className="flex items-center">
                <Link className='text-xl tracking-tighter text-white' href='/'>
                    IrsyadNotes
                </Link>
            </div>
        </Container>
    </nav>
  )
}
