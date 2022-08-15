import React from "react";
import Link from "./Link";

export default function Article({ article }) {
    return (
        <Link
            href={`/articles/${article.slug}`}
            className="bg-gray-950 group flex h-full flex-col rounded-lg p-6 shadow-inner shadow-black/5 transition duration-200 hover:shadow-black/10"
        >
            <div className="flex-1">
                <h4 className="mb-4 font-semibold text-white">
                    {article.title}
                </h4>
                <div className="mb-3 text-sm leading-relaxed text-gray-300 line-clamp-3 lg:text-base">
                    {article.teaser}
                </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-medium text-white transition-colors duration-500 lg:text-base">
                    Read more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 hidden h-4 w-4 fill-gray-300 group-hover:inline"
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

                <span className="text-xs font-medium text-gray-300">
                    {article.created}
                </span>
            </div>
        </Link>
    );
}
