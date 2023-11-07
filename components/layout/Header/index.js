import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const Header = () => {
    
    const [sticky, setSticky] = useState("");
    const [menuClass, setMenuClass]= useState(false);
    const router = useRouter();
    
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        if(window.scrollY>100){
            isSticky()
        }
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 50 ? "sticky" : "";
        setSticky(stickyClass);
    };

    return (
        <>
        <header className={`main-header ${sticky} ${menuClass ? 'menu-open' : ''}`}>
                <div className='container-fluid'>
                    <div className='header-container'>
                        <div className="logo">
                            <Link href="/">
                                <Image
                                    src="/assets/images/project_logo.svg"
                                    alt="Panache"
                                    width={168}
                                    height={100}
                                    priority={true}
                                />
                            </Link>
                        </div>
                        <div className="header-right align-items-center">                            
                            <nav className='main-menu'>
                                <ul>
                                    <li className={router.pathname == "/services" ? "active" : ""}>
                                        <Link href="/">Services</Link>
                                    </li>
                                    <li className={router.pathname == "/programs" ? "active" : ""}>
                                        <Link href="/programs">Programs</Link>
                                    </li>
                                    <li className={router.pathname == "/about" ? "active" : ""}>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li className={router.pathname == "/testimonials" ? "active" : ""}>
                                        <Link href="/">Testimonials</Link>
                                    </li>
                                    <li className={router.pathname == "/contact" ? "active" : ""}>
                                        <Link href="/contact" >Contact</Link>
                                    </li>
                                    <li className={router.pathname == "/blog" ? "active" : ""}>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                    <li className={router.pathname == "/login" ? "active login" : "login"}>
                                        <Link href="/welcome">Login</Link>
                                    </li>
                                    <li className={router.pathname == "/signup" ? "active signup" : "signup"}>
                                        <Link href="/welcome">Sign Up</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="extra-buttons">
                                <ul>
                                    <li className="login"><Link href="/welcome">Login</Link></li>
                                    <li className="signup"><Link href="/welcome">Sign Up</Link></li>
                                </ul>
                            </div>
                            <div className={`menu-ctrl ${menuClass ? 'button-active' : ''}`}>
                                <label onClick={() => setMenuClass(!menuClass)}>
                                    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">                                        
                                        <path className='line--1' d="M0 40h62c13 0 6 28-4 18L35 35" />
                                        <path className='line--2' d="M0 50h70" />
                                        <path className='line--3' d="M0 60h62c13 0 6-28-4-18L35 65" />
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;