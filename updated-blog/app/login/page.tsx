'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './login.module.css'; 
import Image from 'next/image'; // Adjust the path as necessary


export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    router.push('/');
  };

  return (
    <div className={styles.page}>
      <div className={styles.leftPanel}>
        <h1 className={styles.siteTitle}>METAL MADNESS</h1>

        <div className={styles.loginBox}>
          <h2 className={styles.loginTitle}>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />
          <button onClick={handleLogin} className={styles.loginButton}>
            Enter
          </button>
          <p className={styles.registerText}>Dont you have an account? Make your soul and<a className={styles.create} href="/signup">create</a></p>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.skullOverlay}>
          <p className={styles.quote}>Go ahead... if you have the courage.</p>
        </div>
         <Image
          src="https://i.pinimg.com/736x/89/48/06/89480687824ae45aa17cb10febf1bd08.jpg" // Adjust the path as necessary
          alt="Skull"
          width={300}
          height={500}
          className={styles.skullImage}/>
      </div>
    </div>
    
  );
}
