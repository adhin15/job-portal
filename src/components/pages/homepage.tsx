'use client'
import { useEffect, useState } from "react";
import Head from "next/head";
import JobList from "./components/job-list";




export default function Home() {

    return (
        <>
            <Head>
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            `#backdrop-home{
                            &:after{
                                z-index:-1;
                                background-image:url(../../public/images/home-backdrop.jpg);
                            }}
                            svg{
                                display:inline-block !important
                            }`}}
                ></style>
            </Head>
            <section
                id="backdrop-home"
                className={`bg-cover after:bg-center after:bg-no-repeat after:w-full after:inset-0 after:absolute after:max-h-[25rem] after:-z-10 after:opacity-30
                            min-h-[40%] after:bg-[url(../../public/images/home-backdrop.jpg)]
                            `}
            >
                <div className={`container px-4 h-96 pt-12 w-full max-w-full px-10`}>
                    <div className="block w-full font-bold">
                        <h2 className="text-5xl mb-3">Wellcome.</h2>
                        <h3 className="text-3xl mb-12">Thousands of job opportunities, companies, and careers to explore. <br /> Start your search now.</h3>
                    </div>
                </div>
            </section>
            <section>
                <JobList />
            </section>
        </>
    );
}
