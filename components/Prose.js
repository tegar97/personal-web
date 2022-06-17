import React from 'react';
import { marked } from 'marked'
import hljs from 'highlight.js'
marked.setOptions({
    highlight: (code) => hljs.highlightAuto(code).value,
})

export default function Prose({ children }) {
    return (
        <div className='prose prose-invert max-w-none prose-a:text-sky-400 prose-a:font-medium prose-a:shadow-undersky prose-a:no-underline' dangerouslySetInnerHTML={{ __html: marked(children) }}/>
    );
}
