import React from 'react';
import Container from '@/components/Container';
import MetaTags from '@/components/MetaTags';
import Prose from '@/components/Prose';
import Image from 'next/image';
import AppLayout from '../../components/Layouts/AppLayout';
import axios from 'axios'

export default function Show({ article }) {
    return (
        <div>
            <link rel="stylesheet" href="/gh-dimmed.css" />
            <MetaTags
                title={`${article.title} / Irsyad Notes`}
                description={article.teaser}
                image={article.picture}
                url={`https://irsyadnotes.com/articles/${article.slug}`}
            />
            <div className="p-5 lg:p-10">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <Image
                            className="rounded-lg"
                            width={1280}
                            height={720}
                            src={article.picture}
                        />
                        <div className="mt-10">
                            <h1 className="text-3xl lg:text-3xl text-white mb-4 tracking-tight font-bold">
                                {article.title}
                            </h1>
                            <span className="text-sm text-gray-400 font-mono">
                                Published on {article.created}
                            </span>
                            <div className="w-full bg-gradient-to-r mt-4 mb-4 from-gray-700 to-gray-800 via-transparent h-px"></div>
                            <Prose children={article.body} />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const { data } = await axios(`${process.env.NEXT_PUBLIC_API}/${params.slug}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
    });
    const article = data;
    return { props: { article } };
}

Show.getLayout = (page) => <AppLayout children={page} />;
