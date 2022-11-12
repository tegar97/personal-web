import React from 'react';
import clsx from 'clsx';
import styles from '@/components/styles';
import { PageTitleProps } from '@/libs/type';
export default function PageTitle({ className = '', children }: PageTitleProps) {
    return (
        <h1 className={clsx(className, styles.textGradient, 'text-2xl md:text-3xl lg:text-4xl')}>
            {children}
        </h1>
    );
}
