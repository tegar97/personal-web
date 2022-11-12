import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles';
import { NavLinkProps } from '@/libs/type';

export default function NavLink({ href, value, children }: NavLinkProps) {
    const router = useRouter();
    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    router.asPath === href ? 'text-black dark:text-white' : styles.textMuted,
                    'relative inline-flex justify-center px-3 py-2 text-sm font-medium md:py-3 lg:px-4'
                )}>
                {value || children}

                {router.asPath === href && (
                    <span
                        className={clsx(
                            'absolute bottom-[-0.5px] h-px w-full bg-gradient-to-r from-transparent via-rose-500/50 to-transparent dark:via-rose-500/40'
                        )}
                    />
                )}
            </Link>
        </li>
    );
}
