import Head from 'next/head';
import React from 'react';
import { MetaProps } from '@/libs/type';

export default function Meta(args: MetaProps) {
    const {
        title = 'M .Tegar Akmal',
        description = '   Holaaaa 👋, Welcome to my blog buddy , On this website, I write about my daily stuff related to software engineering. .',
        og = 'http://127.0.0.1:3000/images/og-image.jpg',
        url = 'http://127.0.0.1:3000/',
    } = args;
    return (
        <Head>
            <title>{title}</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='title' content={title} />
            <meta name='description' content={description} />

            <meta property='og:type' content='website' />
            <meta property='og:url' content={url} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={og} />

            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content={url} />
            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={description} />
            <meta property='twitter:image' content={og} />
        </Head>
    );
}
