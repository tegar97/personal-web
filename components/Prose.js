import React from 'react';
import { marked } from 'marked'
import hljs from 'highlight.js'
marked.setOptions({
    highlight: (code) => hljs.highlightAuto(code).value,
})

export default function Prose({ children }) {
    return (
        <div className='prose prose-invert max-w-none' dangerouslySetInnerHTML={{ __html: marked(children) }}/>
    );
}
