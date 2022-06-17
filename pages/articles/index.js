import React from 'react';
import Article from '@/components/Article';
import Container from '@/components/Container';
import AppLayout from '@/components/Layouts/AppLayout';
import Link from '../../components/Link';

export default function Index({ articles }) {
    return (
        <div className="p-5 lg:p-10">
            <Container>
                <Link
                    className="group mb-4 flex font-semibold text-sm leading-6 text-slate-200 hover:text-white"
                    href="/"
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
                <div className="lg:block hidden max-w-xl mx-auto text-center">
                    <h1 className="text-white font-bold text-2xl">
                        Latest Updates
                    </h1>
                    <div className="leading-relaxed text-gray-400">
                        You can see and read all my writings below.
                    </div>

                    <div className="block h-px w-full max-w-sm mx-auto bg-gray-800 mt-4 mb-16 rounded-full"></div>
                </div>
                <div>
                    {articles.map((article) => (
                        <Article article={article} key={article.id} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://parsinta.com/api/articles');
    const articles = await res.json();
    return {
        props: {
            articles,
        },
    };
}

Index.getLayout = (page) => <AppLayout children={page} />;
