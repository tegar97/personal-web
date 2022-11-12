import React from 'react';
import Link from 'next/link';
import { ArticleProps } from '../libs/type';

export default function Articles({ articles }: { articles: ArticleProps }) {
    return (
        <>
            {articles.map((article: ArticleProps) => (
                <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className='-ml-6 rounded-xl p-6 transition duration-300 hover:bg-gray-50 dark:hover:bg-gray-800'>
                    <div className='flex-1'>
                        <h4 className='text-gradient mb-3 block text-xl font-semibold'>
                            {article.title}
                        </h4>
                        <span className='text-muted leading-relaxed'>{article.excerpt}</span>
                    </div>

                    <strong className='mt-4 block font-semibold'>Read more</strong>
                </Link>
            ))}
        </>
    );
}
