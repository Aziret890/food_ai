import { Link } from "react-router-dom"
import styles from "../../css/Footer.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footer__nav}>
                    <ul className={styles.footer__menu}>
                        <li className={styles.footer__list}>
                            <Link to="/adresses">ADRESSES</Link>
                        </li>
                        <li className={styles.footer__list}>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li className={styles.footer__list}>
                            <Link to="/contacts">CONTACTS</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__network}>
                    <a
                        target="_blank"
                        href="https://wa.me/+996770566939"
                    >
                        <img
                            src="/images/icons/1.png"
                            alt=""
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/b_ayel.24/"
                    >
                        <img
                            src="/images/icons/2.png"
                            alt=""
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://t.me/bayko04"
                    >
                        <img
                            src="/images/icons/3.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className={styles.footer__line}></div>
                <p className={styles.footer__copyright}>
                    © Copyright 2004 — 2023 «PJ Central Asia» LLC. All Rights
                    Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
