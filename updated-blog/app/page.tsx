'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Main from "./components/Main/main";
import "./globals.css";

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('auth');
    if (!isAuth) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; // ou um spinner se preferir
  }

  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}