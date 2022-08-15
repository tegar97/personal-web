import Link from "next/link";
import React from "react";
import Container from "./Container";
import ExternalButtonLink from "./ExternalButtonLink";
import Logo from "./Logo";
import ProfilePicture from "./ProfilePicture";

export default function Hero() {
    return (
        <div className="mb-8 bg-gradient-to-b from-indigo-100 via-indigo-200 to-indigo-50 py-8 sm:py-16 md:py-20 lg:mb-16 lg:py-64">
            <Link href="/">
                <a className="absolute top-6 left-6 hidden lg:block">
                    <Logo className="w-40 fill-black" />
                </a>
            </Link>
            <Container>
                <div className="flex max-w-3xl gap-4 lg:gap-10">
                    <Link href="/">
                        <a>
                            <ProfilePicture />
                        </a>
                    </Link>

                    <div>
                        <Link href="/">
                            <a>
                                <h1 className="mb-3 text-2xl font-semibold tracking-tighter lg:mb-5 lg:text-5xl">
                                    Irsyad A. Panjaitan
                                </h1>
                            </a>
                        </Link>
                        <div className="prose prose-a:no-underline prose-indigo lg:prose-lg">
                            I'm founder of <strong className="text-black font-semibold">Parsinta</strong>. Let&apos;s start living like no one can help us in
                            any event, so that when we are helped in certain
                            times, it becomes a plus in itself. At this time,
                            I&apos;m teaching practical screencast over on{" "}
                            <a
                                href="https://parsinta.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Parsinta
                            </a>
                            . Let&apos;s talk over on{" "}
                            <a
                                href="https://twitter.com/irsyadadl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>{" "}
                            or{" "}
                            <a
                                href="https://instagram.com/irsyadadl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                            .
                        </div>

                        <div className="mt-10 inline-flex gap-x-2">
                            <ExternalButtonLink
                                className="border-transparent shadow shadow-indigo-900/10"
                                href={`https://github.com/sponsors/irsyadadl`}
                            >
                                <svg
                                    aria-hidden="true"
                                    height={16}
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width={16}
                                    data-view-component="true"
                                    className="fill-pink-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"
                                    />
                                </svg>{" "}
                                Sponsor
                            </ExternalButtonLink>
                            <ExternalButtonLink
                                className="border-transparent shadow shadow-indigo-900/10"
                                href={`https://twitter.com/irsyadadl`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className={`h-4 w-4 text-[#1D9BF0]`}
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                                Follow me
                            </ExternalButtonLink>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
