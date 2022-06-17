import React from 'react';
import Link from './Link';

export default function Article({ article }) {
    return (
        <div className="flex lg:gap-x-6">
            <div className="w-2/12 hidden lg:block">
                <span className="text-slate-400 block -mt-0.5 text-right text-sm font-medium">
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
                        className="stroke-slate-600"
                    />
                </svg>

                <div className="bg-slate-700 h-full w-px"></div>
            </div>
            <div className="w-11/12">
                <Link
                    href={`/articles/${article.slug}`}
                    className="hover:bg-slate-800 mb-12 group lg:p-4 lg:mt-[-17px] block rounded-lg border-t border-transparent hover:border-slate-700 hover:shadow-lg"
                >
                    <span className="text-slate-400 block lg:hidden -mt-0.5 text-xs font-medium">
                        {article.created}
                    </span>
                    <h4 className="text-white font-semibold mb-2 mt-1 lg:leading-none">
                        {article.title}
                    </h4>
                    <div className="leading-relaxed text-slate-400 line-clamp-2 mb-3">
                        {article.teaser}
                    </div>
                    <span className="text-sky-400 hover:text-sky-500 transition-colors font-medium mt-2 duration-500 group-hover:shadow-none shadow-undersky">
                        Read more
                        <span className="sr-only">
                            {article.title}
                        </span>
                    </span>
                </Link>
            </div>
        </div>
    );
}
