import React from 'react';
import Link from './Link';

export default function Article({ article }) {
    return (
        <Link
            href={`/articles/${article.slug}`}
            className="group shadow-inner shadow-black/5 hover:shadow-black/10 transition duration-200 bg-gray-950 h-full flex flex-col p-6 rounded-lg"
        >
            <div className='flex-1'>
                <h4 className="text-white font-semibold mb-4">
                    {article.title}
                </h4>
                <div className="leading-relaxed text-sm lg:text-base text-gray-300 line-clamp-3 mb-3">
                    {article.teaser}
                </div>
            </div>
            <div className="flex items-center justify-between mt-2">
                <span className="lg:text-base text-sm text-white transition-colors font-medium duration-500">
                    Read more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 fill-gray-300 hidden group-hover:inline"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="sr-only">{article.title}</span>
                </span>

                <span className="text-gray-300 text-xs font-medium">
                    {article.created}
                </span>
            </div>
        </Link>
    );
}
