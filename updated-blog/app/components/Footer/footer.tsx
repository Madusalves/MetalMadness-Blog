import React from 'react';
import styles from './footer.module.css';


export default function Footer() {
  return (
      <footer className={styles.site_footer}>
        <div className={styles.footer_container}>
            <div className={styles.footer_divider}></div>
            <p className={styles.copyright}>© 2024 METAL MADNESS. All rights reserved.</p>
            <p>Made with ❤️ by <a href="https://github.com/Madusalves">Maria Eduarda</a></p>
            <p className={styles.last_updated}> Last updated: <span id="footer-date">{getTodayDate()}</span></p>
        </div>
    </footer>
    
  );
}
function getTodayDate() {
  const today = new Date();
  return today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
