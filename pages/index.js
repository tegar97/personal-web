import React from 'react';
import Head from 'next/head';
export default function index() {
    return (
        <>
            <Head>
                <title>Irsyad Notes</title>
            </Head>

            <div className="max-w-lg mx-auto flex flex-col justify-center text-center px-4">
                <div className="mb-5 w-28 h-28 shadows shadow-sky-500/20 bg-contain mx-auto p-1 border-4 border-t-gray-900 border-r-sky-500 border-b-sky-500 border-l-gray-900 rounded-full bg-[url(https://www.gravatar.com/avatar/6d999db3cd931c3ed11d21c36d533a5e?d=identicon&s=300)]"></div>
                <h1 className='text-2xl font-semibold tracking-tighter mb-5'>Irsyad A. Panjaitan</h1>
                <div className="leading-loose text-lg">
                    Let&apos;s start living like no one can help us in any
                    event, so that when we are helped in certain times, it
                    becomes a plus in itself.
                    <p className='mt-5'>
                        At this time, I&apos;m teaching practical screencast
                        over on{' '}
                        <a
                            className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky"
                            href="https://parsinta.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Parsinta
                        </a>{' '}
                        and also developing{' '}
                        <a
                            className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky"
                            href="https://perkebunan.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Perkebunan
                        </a>. Let&apos;s talk over on {' '}
                        <a
                            className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky"
                            href="https://twitter.com/irsyadadl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>{' '}
                        or{' '}
                        <a
                            className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky"
                            href="https://instagram.com/irsyadadl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                        .
                    </p>
                </div>
            </div>
        </>
    );
}
