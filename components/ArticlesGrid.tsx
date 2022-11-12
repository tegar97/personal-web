import React from 'react';
import Link from 'next/link';
import { ArticleProps } from '@/libs/type';

export default function Articles({ articles }: { articles: ArticleProps }) {
    return (
        <>
            {articles.map((article: ArticleProps) => (
                <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className='flex flex-col rounded-xl bg-gray-100 p-4 transition duration-300 hover:bg-gray-50 dark:bg-gray-800/50 dark:hover:bg-gray-800 lg:h-60 lg:p-6'>
                    <div className='flex-1'>
                        <h4 className='text-gradient mb-1 block text-lg font-bold font-semibold lg:mb-3 lg:text-xl'>
                            {article.title}
                        </h4>
                        <span className='text-muted text-sm leading-relaxed lg:text-base'>
                            {article.excerpt}
                        </span>
                    </div>

                    <strong className='text-inverted mt-4 block font-semibold'>Read more</strong>
                </Link>
            ))}
        </>
    );
}
