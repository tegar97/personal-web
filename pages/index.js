import React from "react";
import AppLayout from "@/components/Layouts/AppLayout";
import Container from "../components/Container";
import MetaTags from "../components/MetaTags";
import ProfilePicture from "../components/ProfilePicture";
import axios from "axios";
import ExternalButtonLink from "../components/ExternalButtonLink";
import Image from "next/image";
import TextHeader from "../components/TextHeader";
import Link from "next/link";
import ArticleBlock from "../components/ArticleBlock";
import Project from "../components/Project";

export default function Home({ articles }) {
    return (
        <>
            <MetaTags
                title="Irsyad Notes"
                description="Let's start living like no one can help us in any event, so that when we are helped in certain times, it becomes a plus in itself."
                url="https://irsyadnotes.com"
            />

            <>
                <div className="mb-6 lg:mb-16">
                    <ArticleBlock
                        moreArticle={true}
                        articles={articles.slice(0, 15)}
                    />
                    <Project />
                    <section
                        id="book"
                        className="bg-gradient-to-b from-gray-100 via-sky-50 to-gray-100 py-8 lg:py-16"
                    >
                        <Container>
                            <TextHeader className="mb-6 lg:mb-10">
                                I wrote the book of Laravel.
                            </TextHeader>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
                                <div>
                                    <a
                                        href="https://parsinta.com/s/elrvl"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Image
                                            className="rounded-lg"
                                            alt="The book"
                                            width={1280}
                                            height={720}
                                            src="https://parsinta.s3.ap-southeast-1.amazonaws.com/images/books/belajar-laravel-lebih-dari-sekedar-fundamental-og-image.jpg"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <h1 className="leading-0 mb-0 text-xl font-bold lg:text-3xl">
                                        Learning Laravel Is More Than Just
                                        Fundamentals
                                    </h1>
                                    <p className="mt-6 lg:text-lg text-gray-500">
                                        This book will teach you how to use
                                        laravel framework with best practices as
                                        recommended by experts.
                                    </p>
                                    <p className="mt-6 lg:text-lg text-gray-500">
                                        If you don't understand Indonesian,
                                        unfortunately this book won't be of any
                                        use to you.{" "}
                                        <strong className="font-semibold text-black">
                                            Because this book is made in my
                                            everyday language, namely Indonesian
                                        </strong>
                                        .
                                    </p>
                                    <div className="my-6 flex items-center gap-4">
                                        <ExternalButtonLink
                                            className="w-full justify-center"
                                            href="https://parsinta.s3.ap-southeast-1.amazonaws.com/ebooks/belajar-laravel-lebih-dari-sekedar-fundamental.pdf"
                                        >
                                            Sample
                                        </ExternalButtonLink>
                                        <ExternalButtonLink
                                            className="w-full justify-center"
                                            href="https://parsinta.com/s/elrvl"
                                        >
                                            Buy now
                                        </ExternalButtonLink>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>
                </div>
            </>
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

Home.getLayout = (page) => <AppLayout children={page} />;
