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
                                        {articles
                                            .slice(0, 20)
                                            .map((article) => (
                                                <li key={article.id}>
                                                    <Link
                                                        href={`/articles/${article.slug}`}
                                                    >
                                                        <a>{article.title}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                    </ol>
                                    <Link href="/articles">
                                        <a className="text-indigo-500 underline">
                                            More articles.
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Container>
                    </section>
                    <section
                        id="book"
                        className="bg-gradient-to-b from-gray-100 via-sky-50 to-gray-100 py-8 lg:py-16"
                    >
                        <Container>
                            <TextHeader className="mb-6 lg:mb-10">
                                I wrote the book of Laravel.
                            </TextHeader>
                            <div className="grid grid-cols-1 gap-4 lg:gap-10 lg:grid-cols-2">
                                <div>
                                    <a
                                        href="https://parsinta.com/s/elrvl"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="hidden lg:block">
                                            <Image
                                                className="rounded-l-3xl rounded-r-lg"
                                                width={1200}
                                                height={1698}
                                                src="https://parsinta.s3.ap-southeast-1.amazonaws.com/images/books/belajar-laravel-lebih-dari-sekedar-fundamental.jpg"
                                            />
                                        </div>
                                        <div className="lg:hidden block">
                                            <Image
                                                className="rounded-lg"
                                                width={1280}
                                                height={720}
                                                src="https://parsinta.s3.ap-southeast-1.amazonaws.com/images/books/belajar-laravel-lebih-dari-sekedar-fundamental-og-image.jpg"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="prose flex h-full flex-col prose-a:no-underline">
                                    <h1 className="leading-0 mb-0 text-xl lg:text-3xl">
                                        Belajar Laravel Lebih Dari Sekedar
                                        Fundamental
                                    </h1>
                                    <p className="lg:lead">
                                        Buku ini akan mengajarkan Anda bagaimana
                                        menggunakan framework laravel dengan
                                        baik.
                                    </p>
                                    <div className="mb-5 rounded-lg border border-blue-300 bg-blue-50 p-4">
                                        Ebook akan terus diperbarui jika ada
                                        perubahan yang signifikan pada framework
                                        yang sedang digunakan. Dan bagi yang
                                        sudah membelinya akan diberikan secara
                                        gratis.
                                    </div>
                                    <div className="prose hidden flex-1 lg:prose-lg lg:block">
                                        <p>
                                            Dalam ebook ini kita akan
                                            mempelajari Laravel dari awal namun
                                            tidak sekedar fundamental, kita akan
                                            membahas bagaimana
                                            mengimplementasikan relasi eloquent
                                            yang lumayan kompleks seperti many
                                            to many, polimorpik, dan banyak
                                            lagi. Dan sudah pasti akan ada
                                            banyak tips and triks yang
                                            terkandung dalam buku ini sehingga
                                            Anda bisa memilih ingin menggunakan
                                            metode yang seperti apa.
                                        </p>
                                        <p>
                                            Untuk versi Laravel, dalam buku ini
                                            memakai versi 9.18 yang nanti akan
                                            di upgrade menjadi 9.19 pada saat
                                            mengimplementasikan vite pada bab
                                            "Digging Deeper". Untuk PHP sendiri
                                            sudah pasti 8+. Bagi Anda yang
                                            mengikuti buku ini dengan versi
                                            laravel yang lebih dari 9.19, itu
                                            sama sekali tidak masalah.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <ExternalButtonLink
                                            className="w-full justify-center"
                                            href="https://parsinta.s3.ap-southeast-1.amazonaws.com/ebooks/belajar-laravel-lebih-dari-sekedar-fundamental.pdf"
                                        >
                                            Lihat sample
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
