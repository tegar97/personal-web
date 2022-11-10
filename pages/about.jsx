import React from 'react';
import PageTitle from '@/components/PageTitle';
import MyPictureWithSocial from '@/components/MyPictureWithSocial';
import Container from '@/components/Container';
import styles from '@/components/styles';
import Meta from '@/components/Meta';

export default function About() {
    return (
        <>
            <Meta
                title="About / Irsyad Notes"
                url="https://irsyadnotes.com/about"
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div className="flex flex-col-reverse gap-10 lg:flex-row">
                        <div className="w-full lg:w-2/3">
                            <PageTitle className="mb-6">
                                I’m Irsyad A. Panjaitan. I live in Medan
                                Indonesia, where I built Parsinta.
                            </PageTitle>
                            <section className="prose dark:prose-invert lg:prose-lg">
                                <p>
                                    There are so many questions where I
                                    currently work, from 2016 to 2 February 2022
                                    I have worked in several PTs engaged in
                                    Software Agency and Software House.
                                </p>
                                <p>
                                    I also had time to teach offline, but it had
                                    been a long time since I left. And starting
                                    March 1, 2022, I have decided that I will no
                                    longer work anywhere but focus on Parsinta
                                    and then seriously make the work, whether it
                                    be in the form of writing or video courses.
                                </p>
                                <p>
                                    My current routine has 3 things, making
                                    video courses, writing articles, and writing
                                    books. And if you want to talk about your
                                    current job, or want to talk about coding,
                                    and even life. You can directly dm me on
                                    twitter, because I myself have lived long
                                    enough in the midst of a company that
                                    especially operates in the software.
                                </p>
                                <p>
                                    Sorry if you ever dm me on Instagram and
                                    maybe the reply might take too long or even
                                    no reply. It's just because I'm not really
                                    active there. But if you dm me via twitter,
                                    hopefully I'll reply right away. Because I'm
                                    always online there.
                                </p>
                            </section>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <MyPictureWithSocial />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
