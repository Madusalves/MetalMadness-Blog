import React from 'react';
import styles from './header.module.css';




export default function Header() {
    return (
        <header className={styles.site_header}>
            <div className={styles.header_container}>
                <div className={styles.logo}>
                    <h1 className={styles.site_title}>METAL MADNESS</h1>
                    <p className={styles['site-tagline']}>Your Ultimate Metal Blog</p>
                </div>
                <nav className={styles['main-nav']}>
                    <ul>
                        <li><a href="#home" className={styles['nav-link']}>HOME</a></li>
                        <li><a href="#news" className={styles['nav-link']}>NEWS</a></li>
                        <li><a href="#reviews" className={styles['nav-link']}>REVIEWS</a></li>
                        <li><a href="#posters" className={styles['nav-link']}>POSTERS</a></li>
                        <li><a href="#playlist" className={styles['nav-link']}>PLAYLIST</a></li>
                        <li><a href="#forum" className={styles['nav-link']}>FORUM</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}