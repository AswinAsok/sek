import React, { useRef, useEffect, useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/Logo.webp";

export default function Navbar({ handleFormClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 150;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.nav}>
            <div
                className={`${styles.navbar} ${
                    isScrolled ? styles.scrolled : ""
                } ${isMobileMenuOpen ? styles.open : ""}`}
            >
                <div
                    className={`${styles.menuIcon} ${
                        isMobileMenuOpen ? styles.open : ""
                    }`}
                    onClick={handleMobileMenuToggle}
                >
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                </div>

                <a href="/">
                    <img className={styles.logo} src={logo} alt="gsfk-logo" />
                </a>

                <div
                    className={`${styles.links} ${
                        isMobileMenuOpen ? styles.open : ""
                    }`}
                >
                    <a href="/">
                        <img
                            className={styles.logoo}
                            src={logo}
                            alt="gsfk-logo"
                        />
                    </a>

                    <div className={styles.linkBlocks}>
                        <a
                            href={
                                window.location.pathname === "/team"
                                    ? "/#about"
                                    : "#about"
                            }
                        >
                            About
                        </a>
                        <a href="#join">Partners</a>
                        <a href="/team">Team</a>
                        <p
                            className={styles.menuBuy}
                            onClick={handleFormClick}
                        >
                            Buy Ticket
                        </p>
                    </div>

                    <p
                        className={styles.buy}
                        onClick={handleFormClick}
                    >
                        <b>Buy Ticket</b>
                    </p>
                </div>
            </div>
        </nav>
    );
}
