import React from "react";
import Container from "./Container";
import Link from "./Link";
import TextHeader from "./TextHeader";

export default function ArticleBlock({ articles, moreArticle = false }) {
    return (
        <section
            id="articles"
            className="-mt-8 bg-gradient-to-b from-indigo-50 via-green-50 to-gray-100 py-8 lg:-mt-16"
        >
            <Container>
                <div>
                    <TextHeader className="mb-10">My articles</TextHeader>
                    <div className="prose flex h-full flex-col prose-a:no-underline">
                        <ol>
                            {articles.map((article) => (
                                <li key={article.id}>
                                    <Link href={`/articles/${article.slug}`}>
                                        <a>{article.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                        {moreArticle && (
                            <Link href="/articles">
                                <a className="text-indigo-500 underline">
                                    More articles.
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
