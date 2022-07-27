import React from 'react';
import AppLayout from '@/components/Layouts/AppLayout';
import Container from '../components/Container';
import Link from '../components/Link';
import MetaTags from '../components/MetaTags';
import ProfilePicture from '../components/ProfilePicture';
import Article from '../components/Article';
import Grid from '../components/Grid';

export default function Home({ articles }) {
    return (
        <>
            <MetaTags
                title="Irsyad Notes"
                description="Let's start living like no one can help us in any event, so that when we are helped in certain times, it becomes a plus in itself."
                url="https://irsyadnotes.com"
            />

            <div className="bg-[#20212E] border-b border-[#323446] py-8 sm:py-16 md:py-32 lg:py-40 mb-8 lg:mb-16">
                <Container>
                    <div className="max-w-3xl flex gap-4 lg:gap-10">
                        <div className="shrink-0">
                            <ProfilePicture />
                        </div>
                        <div>
                            <h1 className="text-2xl lg:text-5xl font-semibold tracking-tighter mb-3 lg:mb-5 text-white">
                                Irsyad A. Panjaitan
                            </h1>
                            <div className="leading-relaxed lg:leading-loose text-base lg:text-lg text-gray-200">
                                Let&apos;s start living like no one can help us
                                in any event, so that when we are helped in
                                certain times, it becomes a plus in itself. At
                                this time, I&apos;m teaching practical
                                screencast over on{' '}
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
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="mb-6 lg:mb-16">
                    <h1 className="text-white font-bold text-xl lg:text-2xl">
                        Latest Updates
                    </h1>
                    <div className="leading-relaxed text-gray-300">
                        You can see and read all my writings below.
                    </div>

                    <div className="w-full bg-gradient-to-r from-gray-700 via-transparent to-transparent my-4 h-px"></div>
                </div>

                <Grid cols={3}>
                    {articles.map((article) => (
                        <Article article={article} key={article.id} />
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://parsinta.com/api/articles');
    const articles = await res.json();
    return {
        props: {
            articles,
        },
        revalidate: 1200, // In seconds
    };
}

Home.getLayout = (page) => <AppLayout children={page} />;
