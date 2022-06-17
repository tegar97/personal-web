import React from 'react';
import AppLayout from '@/components/Layouts/AppLayout';
import Container from '../components/Container';
import Link from '../components/Link';
import MetaTags from '../components/MetaTags';

export default function Home() {
    return (
        <div className="lg:min-h-screen flex items-center p-10 lg:p-0 justify-center">
            <MetaTags
                title="Irsyad Notes"
                description="Let's start living like no one can help us in any event, so that when we are helped in certain times, it becomes a plus in itself."
                url='https://irsyadnotes.com'
            />
            <Container>
                <div className="max-w-xl mx-auto flex flex-col justify-center text-center px-4">
                    <div className="mb-5 w-28 h-28 shadows shadow-sky-500/20 bg-contain mx-auto p-1 border-4 border-t-slate-900 border-r-sky-500 border-b-sky-500 border-l-slate-900 rounded-full bg-[url(https://www.gravatar.com/avatar/6d999db3cd931c3ed11d21c36d533a5e?d=identicon&s=300)]"></div>
                    <h1 className="text-2xl font-semibold tracking-tighter mb-3 lg:mb-5 text-white">
                        Irsyad A. Panjaitan
                    </h1>
                    <div className="leading-relaxed lg:leading-loose text-base lg:text-lg text-gray-400">
                        Let&apos;s start living like no one can help us in any
                        event, so that when we are helped in certain times, it
                        becomes a plus in itself.
                        <p className="mt-5">
                            At this time, I&apos;m teaching practical screencast
                            over on{' '}
                            <a
                                className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky"
                                href="https://parsinta.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Parsinta
                            </a>
                            . Let&apos;s talk over on{' '}
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

                    <div className="flex items-center justify-center mt-6 gap-2">
                        {/* <Link href='/articles' className='border-t border-slate-700 bg-slate-800 shadow rounded-lg text-slate-50 font-semibold uppercase text-xs px-6 py-3 hover:shadow-none'>
                            Parsinta
                        </Link>

                        <Link href='/articles' className='border-t border-slate-700 bg-slate-800 shadow rounded-lg text-slate-50 font-semibold uppercase text-xs px-6 py-3 hover:shadow-none'>
                            Twitter
                        </Link>
                        <Link href='/articles' className='border-t border-slate-700 bg-slate-800 shadow rounded-lg text-slate-50 font-semibold uppercase text-xs px-6 py-3 hover:shadow-none'>
                            Instagram
                        </Link> */}
                        <Link
                            href="/articles"
                            className="border-t border-slate-700 bg-slate-800 shadow rounded-lg text-slate-50 font-semibold uppercase text-xs px-6 py-3 hover:shadow-none"
                        >
                            Read my Blog
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Home.getLayout = (page) => <AppLayout children={page} />;
