import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Layout from '@/components/Layout';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
            <Analytics />
        </Layout>
    );
}
