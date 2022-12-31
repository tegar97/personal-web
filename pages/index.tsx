import { socials } from '@/libs/socials';
import React from 'react';
import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { POSTS_PATH } from '@/libs/helpers';
import Articles from '@/components/Articles';
import PageTitle from '@/components/PageTitle';
import ProjectAtHome from '@/components/ProjectAtHome';
import Container from '@/components/Container';
import styles from '@/components/styles';
import clsx from 'clsx';
import Link from 'next/link';
import Meta from '@/components/Meta';
import { ArticleProps } from '@/libs/type';
import ArticlesGrid from '@/components/ArticlesGrid';
import Image from 'next/image';

export default function index({ articles }: { articles: ArticleProps }) {
    console.log(articles)
    return (
        <>
            <Meta title='Irsyad Notes' url={`http://127.0.0.1:3000/articles`} />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div className='mb-10 flex flex-col  gap-5 lg:gap-10'>
                        <div className='flex flex-row items-center gap-3 sm:gap-5'>
                            <Image
                                className='rounded-full'
                                width='100'
                                height='100'
                                src='/images/me/me.jpg'
                                alt='Tegarrr'
                            />

                            <div>
                                <PageTitle className='text-1xl mb-1 md:text-2xl lg:text-3xl'>
                                    Muhammad Tegar Akmal
                                </PageTitle>
                                <h2 className='text-muted text-md lg:text-1xl md:text-lg '>
                                    Software Developer
                                </h2>
                            </div>
                        </div>
                        <p>
                            {' '}
                            Holaaaa 👋, Welcome to my blog buddy , On this
                            website, I write about my daily stuff related to software engineering. .
                        </p>
                        <div className='mt-2 flex flex-row gap-5'>
                            {socials.map(({ name, url, icon: Icon }, i) => (
                                <Link
                                    key={i}
                                    href={url}
                                    className='flex items-center   rounded-md py-2 px-2 dark:bg-[#1a1c32]'>
                                    <Icon stroke={2} className='h-6 w-6  text-blue-500 ' />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='mt-20 flex flex-col gap-10'>
                        <PageTitle className='text-1xl mb-1 md:text-2xl lg:text-3xl '>
                            My Article
                        </PageTitle>
                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10'>
                            <ArticlesGrid articles={articles} />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            articles: getArticles()
                .slice(0, 9)
                .map((post) => post.meta),
        },
    };
}

const getSlugs = () => {
    const paths = sync(`${POSTS_PATH}/*.mdx`);
    console.log(`paths ${paths}`)

    return paths.map((path) => {
        const parts = path.split('/');
        const fileName = parts[parts.length - 1];
        const [slug, _ext] = fileName.split('.');
        return slug;
    });
};

const getPostFromSlug = (slug: string) => {
    const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);
    const { content, data } = matter(source);

    return {
        content,
        meta: {
            slug,
            excerpt: data.excerpt ?? 'slug',
            title: data.title ?? slug,
            tags: data?.tags?.sort(),
            date: data?.date?.toString(),
        },
    };
};

const getArticles = () => {
    return getSlugs()
        .map((slug) => getPostFromSlug(slug))
        .sort((a, b) => {
            if (a.meta.date > b.meta.date) return 1;
            if (a.meta.date < b.meta.date) return -1;
            return 0;
        })
        .reverse();
};
