import Image from 'next/image';
import NavLink from './NavLink';
import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
export default function Navbar() {
    return (
        <div className='flex items-center justify-center px-4 md:justify-between sticky'>
            <Link href='/' className='hidden cursor-pointer sm:block'>
                <Image
                    className='h-8 w-8 rounded-full'
                    width='32'
                    height='32'
                    src='/images/me/grunch.jpg'
                    alt='Irsyad Notes'
                />
            </Link>
            <ul className='flex items-center overflow-hidden rounded-xl bg-white shadow dark:bg-gray-700/50 lg:px-4'>
                <NavLink href='/about' value='About' />
                <NavLink href='/articles' value='Articles' />
                <NavLink href='/projects' value='Projects' />
                <NavLink href='/uses' value='Uses' />
            </ul>
            <div className='ml-2'>
                <ThemeSwitcher />
            </div>
        </div>
    );
}
