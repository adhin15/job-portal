import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Button from "@/components/shared/Button";


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { data: session } = useSession()

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        console.log('log data', session)
    }, [session])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div
                className={`flex justify-between items-center px-12 py-4 max-w-full h-18 w-full flex-wrap fixed top-0 transition ease-in delay-550 relative" z-10 ${scrolled ? "bg-secondary-bg" : "bg-transparent"}`}
                id="container-navbar"
            >
                <div className="h-9 " id="container-image">
                    <Link href={'/'} type="button" className="cursor-pointer h-full">
                        <img src="/images/main-logo.png" className="w-32 h-full object-contain" />
                    </Link>
                </div>
                <div className="flex gap-2">
                    {!session ?
                        <Button onClick={() => { signIn() }}>
                            login
                        </Button> :
                        <div className="flex justify-center items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            <p>
                                {session?.user?.name}
                            </p>
                            <Button onClick={() => { signOut() }}>
                                logout
                            </Button>
                        </div>
                    }
                </div>

            </div>
        </>
    )
}

export default Navbar;