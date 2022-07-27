import React from 'react';
import Link from './Link';

export default function Article({ article }) {
    return (
        <div className="flex mx-auto max-w-4xl lg:gap-x-6">
            <div className="w-2/12 hidden lg:block">
                <span className="text-gray-200 block -mt-1.5 text-right pr-4 text-sm font-medium">
                    {article.created}
                </span>
            </div>
            <div className="hidden lg:flex flex-col items-center">
                <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={14}
                    height={14}
                >
                    <circle
                        cx={12}
                        cy={12}
                        r="9.5"
                        stroke="#000"
                        strokeWidth={4}
                        className="stroke-gray-500"
                    />
                </svg>

                <div className="bg-gray-700 h-full w-px"></div>
            </div>
            <div className="w-11/12">
                <Link
                    href={`/articles/${article.slug}`}
                    className="hover:lg:bg-gray-800 mb-12 group lg:p-4 lg:-mt-[22px] block rounded-lg border-t border-transparent hover:lg:border-gray-700 hover:lg:shadow-lg"
                >
                    <h4 className="text-white font-semibold mb-2 mt-1 lg:leading-none">
                        {article.title}
                    </h4>
                    <div className="leading-relaxed text-sm lg:text-base text-gray-300 line-clamp-3 mb-3">
                        {article.teaser}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="lg:text-base text-sm text-sky-400 hover:text-sky-500 transition-colors font-medium duration-500">
                            Read more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 fill-gray-300 hidden group-hover:inline"
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
            </div>
        </div>
    );
}
