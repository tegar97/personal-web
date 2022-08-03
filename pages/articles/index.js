import React from 'react';
import Article from '@/components/Article';
import Container from '@/components/Container';
import AppLayout from '@/components/Layouts/AppLayout';
import MetaTags from '../../components/MetaTags'

export default function Index({ articles }) {
    return (
        <div className="p-5 lg:p-10">
            <MetaTags
                title="Irsyad Notes: Articles"
                description="You can see and read all my writings below."
                url='https://irsyadnotes.com/articles'
            />
            <Container>
                <div className="max-w-xl mx-auto text-left lg:text-center">
                    <h1 className="text-white font-bold text-xl lg:text-2xl">
                        Latest Updates
                    </h1>
                    <div className="leading-relaxed text-sm lg:text-base text-gray-200">
                        You can see and read all my writings below.
                    </div>

                    <div className="block h-px w-full max-w-sm mx-auto bg-gray-800 mt-4 mb-4 lg:mb-16 rounded-full"></div>
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
    const { data } = await axios(process.env.NEXT_PUBLIC_API, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
    });
    const articles = data;
    return {
        props: {
            articles,
        },
        revalidate: 1200, // In seconds
    };
}

Index.getLayout = (page) => <AppLayout children={page} />;
