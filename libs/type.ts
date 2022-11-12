import React from 'react';
export interface NavLinkProps {
    href: string;
    value: string;
    children?: React.ReactNode;
}

export interface MetaProps {
    title: string;
    description?: string;
    og?: string;
    url?: string;
}

export interface YoutubeProps {
    id: string;
}

export interface PageTitleProps {
    className?: string;
    children: React.ReactNode;
}

export interface ArticleProps {
    [x: string]: any;
    slug: React.Key | null | undefined;
    title: string;
    excerpt: string;
}
