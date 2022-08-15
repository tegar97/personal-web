import React, { useEffect } from "react";
import hljs from "highlight.js";
import blade from "highlightjs-blade";
hljs.registerLanguage("blade", blade);
export default function Prose({ children }) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <div
            className="prose prose-sky max-w-none prose-a:font-medium prose-a:no-underline prose-pre:bg-none prose-pre:p-0 prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: children }}
        />
    );
}
