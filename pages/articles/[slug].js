import Head from 'next/head';
import React from 'react';
import Container from '@/components/Container';
import Link from '@/components/Link';
import MetaTags from '@/components/MetaTags';
import Prose from '@/components/Prose';

export default function Show({ article }) {
    return (
        <div>
            <link rel="stylesheet" href="/gh-dimmed.css" />
            <MetaTags
                title={article.title}
                description={article.teaser}
                image={article.picture}
                url={`https://irsyadnotes.com/articles/${article.slug}`}
            />
            <Link
                className="group pl-5 pt-5 flex font-semibold text-sm leading-6 text-slate-200 hover:text-white"
                href="/articles"
            >
                <svg
                    viewBox="0 -9 3 24"
                    className="overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-300"
                >
                    <path
                        d="M3 0L0 3L3 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Go back
            </Link>
            <div className="p-5 lg:p-10">
                <Container>
                    {/* <Image className='rounded-lg' width={1280} height={720} src={article.picture}/> */}
                    <div className="max-w-3xl mx-auto">
                        <span className="text-sm text-gray-400 -mb-6 block">{article.created}</span>
                        <h1 className="text-3xl lg:text-5xl text-white mb-4 lg:my-8 tracking-tight font-bold">
                            {article.title}
                        </h1>
                        <Prose children={article.body} />
                        {/* <div
                            className="prose max-w-none prose-invert"
                            dangerouslySetInnerHTML={{ __html: article.body }}
                        /> */}
                    </div>
                </Container>
            </div>
        </div>
    );
}
export async function getStaticPaths() {
    // Call an external API endpoint to get articles
    const res = await fetch('https://parsinta.com/api/articles');
    const articles = await res.json();
    const paths = articles.map((article) => ({
        params: { slug: article.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://parsinta.com/api/articles/${params.slug}`);
    const article = await res.json();
    return { props: { article } };
}
