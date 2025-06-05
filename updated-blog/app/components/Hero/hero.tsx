import React from 'react';
import styles from './hero.module.css';


export default function Header() {
  return (
    <div className={styles.hero_banner}>
        <div className={styles.banner_content}>
            <h2 className={styles.banner_title}>WELCOME TO METAL MADNESS</h2>
            <p className={styles.banner_text}>The ultimate heavy metal blog where we celebrate the power of metal music!</p>
            <div className={styles.visitor_counter}>
                <span>You are visitor number: </span>
                <span id="visitor-counter">666</span>
            </div>
        </div>
    </div>
  );
}