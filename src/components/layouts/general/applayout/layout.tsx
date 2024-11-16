'use client'
import { useEffect } from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../../../../app/globals.css";
import Aos from "aos";
import { SessionProvider } from "next-auth/react"
import 'aos/dist/aos.css';

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <html lang="en">
            <Head>
                <title>MoFLixx</title>
                <link href="/dist/main.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
                />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <body>
                <SessionProvider>
                    <QueryClientProvider client={queryClient}>
                        <Navbar />
                        <div className="min-h-screen px-8 pt-[68px]">{children}</div>
                        <Footer />
                    </QueryClientProvider>
                </SessionProvider>

            </body>

        </html>
    );
};

export default Layout;
