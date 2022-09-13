import { socials } from '@/libs/socials';
import React from 'react';
import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { POSTS_PATH } from '@/helpers';
import Articles from '@/components/articles';
import PageTitle from '@/components/PageTitle';
import ProjectAtHome from '@/components/ProjectAtHome';
import Head from 'next/head';
import Container from '@/components/Container';
import styles from '@/components/styles';
import clsx from 'clsx';
import Link from 'next/link';

export default function index({ articles }) {
    return (
        <>
            <Head>
                <title>Irsyad Notes</title>
            </Head>
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div
                        id='articles'
                        className='flex flex-col gap-6 lg:flex-row lg:gap-10'
                    >
                        <div className='w-full lg:w-2/3'>
                            <div className='mb-4'>
                                <PageTitle>My Articles</PageTitle>
                                <p
                                    className={clsx(
                                        styles.textMuted,
                                        'mt-2 text-xl'
                                    )}
                                >
                                    Everything that is on my mind, I will write
                                    here.
                                </p>
                            </div>
                            <div className='flex max-w-xl flex-col'>
                                <Articles articles={articles} />
                            </div>
                        </div>
                        <div className='w-full lg:w-1/3'>
                            <div className={clsx(
                                // styles.flexCenter,

                                'flex justify-end items-center gap-1'
                            )}>
                                <span className={styles.textMuted}>Follow me ⎯⎯⎯⎯</span>
                                {socials.map(({url, icon: Icon}, i) => (
                                    <Link href={url} key={i}>
                                        <a className={clsx(
                                            styles.flexCenter,
                                            'w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full'
                                        )}>
                                            <Icon stroke={1} className='w-5 h-5'/>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                            <div className='mt-4'>
                                <ProjectAtHome />
                            </div>
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

    return paths.map((path) => {
        const parts = path.split('/');
        const fileName = parts[parts.length - 1];
        const [slug, _ext] = fileName.split('.');
        return slug;
    });
};

const getPostFromSlug = (slug) => {
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
