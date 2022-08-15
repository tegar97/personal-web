import React from "react";
import AppLayout from "@/components/Layouts/AppLayout";
import Container from "@/components/Container";
import MetaTags from "@/components/MetaTags";
import axios from "axios";
import TextHeader from "../../components/TextHeader";
import Link from "next/link";

export default function Index({ articles }) {
    return (
        <>
            <MetaTags
                title="Irsyad Notes"
                description="Let's start living like no one can help us in any event, so that when we are helped in certain times, it becomes a plus in itself."
                url="https://irsyadnotes.com"
            />

            <div className="mb-6 lg:mb-16">
                <section
                    id="articles"
                    className="-mt-16 bg-gradient-to-b from-indigo-50 via-green-50 to-gray-100 py-8"
                >
                    <Container>
                        <div>
                            <TextHeader className="mb-10">
                                My articles
                            </TextHeader>
                            <div className="prose flex h-full flex-col prose-a:no-underline">
                                <ol>
                                    {articles.map((article) => (
                                        <li key={article.id}>
                                            <Link
                                                href={`/articles/${article.slug}`}
                                            >
                                                <a>{article.title}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        </>
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
