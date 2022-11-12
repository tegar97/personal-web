import { socials } from '@/libs/socials';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function MyPictureWithSocial() {
    return (
        <>
            <Image
                className='rounded-lg'
                width='512'
                height='512'
                src='/images/me/cool.jpg'
                alt='Irsyad A. Panjaitan'
            />

            <div className='mt-8 space-y-4'>
                {socials.map(({ name, url, icon: Icon }, i) => (
                    <Link key={i} href={url} className='flex items-center gap-x-2'>
                        <Icon stroke={1} className='h-5 w-5' />
                        {name}
                    </Link>
                ))}
            </div>
        </>
    );
}
