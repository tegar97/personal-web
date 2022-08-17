import React from "react";
import Container from "./Container";
import Link from "./Link";
import TextHeader from "./TextHeader";
const projects = [
    {
        repo: "irsyadadl/fence",
        description:
            "Fence is a package for authentication views using Laravel fortify.",
        slug: "https://github.com/irsyadadl/fence",
        type: "Blade",
    },
    {
        repo: "irsyadadl/parsinta-exclusive",
        description: "A vscode theme that suits your eyes.",
        slug: "https://github.com/irsyadadl/parsinta-exclusive",
        type: "Theme",
    },
    {
        repo: "irsyadadl/libr",
        description: "Laravel with Bootstrap & React ",
        slug: "https://github.com/irsyadadl/libr",
        type: "Javascript",
    },
    {
        repo: "teamparsinta/react-starter",
        description: "It's a react starter project with tailwind css.",
        slug: "https://github.com/teamparsinta/react-starter",
        type: "Javascript",
    },
    {
        repo: "irsyadadl/irsyadnotes.com",
        description: "Irsyad Notes is the site you are currently visiting.",
        slug: "https://github.com/irsyadadl/irsyadnotes.com",
        type: "Javascript",
    },
];
export default function Project() {
    return (
        <section
            id="articles"
            className="bg-gradient-to-b from-gray-100 via-orange-50 to-gray-100 py-8"
        >
            <Container>
                <div>
                    <TextHeader className="mb-10">My projects</TextHeader>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {projects.map((project, i) => (
                            <div key={i}>
                                <a
                                    className="block rounded-lg bg-white p-6 shadow transition duration-200 hover:shadow-md"
                                    href={project.slug}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="font-mono text-xs font-semibold uppercase tracking-tighter">
                                        {project.type}
                                    </span>
                                    <h3 className="mt-3 font-mono font-semibold tracking-tighter text-black lg:text-xl">
                                        {project.repo}
                                    </h3>
                                    <div className="leading-relaxed text-gray-500">
                                        {project.description}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
