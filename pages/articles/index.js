import React from "react";
import AppLayout from "@/components/Layouts/AppLayout";
import Container from "@/components/Container";
import MetaTags from "@/components/MetaTags";
import axios from "axios";
import TextHeader from "../../components/TextHeader";
import Link from "next/link";
import ArticleBlock from "../../components/ArticleBlock";

export default function Index({ articles }) {
    return (
        <>
            <MetaTags
                title="Irsyad Notes"
                description="Let's start living like no one can help us in any event, so that when we are helped in certain times, it becomes a plus in itself."
                url="https://irsyadnotes.com"
            />

            <div className="mb-6 lg:mb-16">
                <ArticleBlock articles={articles} />
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
