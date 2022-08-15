import React from "react";
import Container from "@/components/Container";
import MetaTags from "@/components/MetaTags";
import Prose from "@/components/Prose";
import Image from "next/image";
import AppLayout from "../../components/Layouts/AppLayout";
import axios from "axios";

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
            <div className="-mt-48">
                <Container>
                    <div className="mb-12 max-w-4xl rounded-2xl bg-white p-10 shadow-lg">
                        <Image
                            className="-ml-92 rounded-lg"
                            width={1280}
                            height={720}
                            src={article.picture}
                        />
                        <div className="mt-10">
                            <h1 className="mb-4 text-3xl font-bold tracking-tight lg:text-3xl">
                                {article.title}
                            </h1>
                            <span className="font-mono text-sm text-gray-600">
                                Published on {article.created}
                            </span>
                            <div className="mt-4 mb-4 h-px w-full bg-gradient-to-r from-gray-200 via-transparent to-transparent"></div>
                            <Prose children={article.body} />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const { data } = await axios(
        `${process.env.NEXT_PUBLIC_API}/${params.slug}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
        }
    );
    const article = data;
    return { props: { article } };
}

Show.getLayout = (page) => <AppLayout children={page} />;
