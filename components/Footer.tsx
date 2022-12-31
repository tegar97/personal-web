import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import Container from './Container';
import styles from './styles';
import { NavLinkProps } from '@/libs/type';

export default function Footer() {
    return (
        <div className='py-8'>
            <Container>
                <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                    <ul className='flex items-center gap-x-4'>
                        <NavLink href='/' value='Home' />
                        <NavLink href='/articles' value='Articles' />
                       
                    </ul>
                    <div className={clsx(styles.textMuted, 'text-right')}>
                        © 2022 Tegar. All rights reserved.
                    </div>
                </div>
            </Container>
        </div>
    );
}

function NavLink({ href, value, children }: NavLinkProps) {
    return (
        <li>
            <Link href={href} className={styles.textMuted}>
                {value || children}
            </Link>
        </li>
    );
}
