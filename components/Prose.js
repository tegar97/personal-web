import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import blade from 'highlightjs-blade'
hljs.registerLanguage('blade', blade)
export default function Prose({ children }) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <div
            className="prose prose-pre:bg-none prose-pre:p-0 prose-img:rounded-lg prose-invert max-w-none prose-a:text-sky-400 prose-a:font-medium prose-a:shadow-undersky prose-a:no-underline"
            dangerouslySetInnerHTML={{ __html: children }}
        />
    );
}
