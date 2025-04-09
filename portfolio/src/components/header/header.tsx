'use client';
//import Image from 'next/image';
import Button from '../button/button';
import styles from '@/components/header/header.module.scss'
import { useEffect, useState } from 'react';


export default function Header(){
    function useIsLargeScreen(breakpoint = 1024) {
        const [isLarge, setIsLarge] = useState(false);
      
        useEffect(() => {
          const handleResize = () => {
            setIsLarge(window.innerWidth >= breakpoint);
          };
      
          handleResize(); // vérifier au chargement
          window.addEventListener('resize', handleResize);
      
          return () => window.removeEventListener('resize', handleResize);
        }, [breakpoint]);
      
        return isLarge;
    }

    const isScreenLarge = useIsLargeScreen();
    const btnSize = isScreenLarge ? 'large' : 'small';

    return(
        <header>
            <h1 className={styles.title}>BUFFET Maxime Portfolio</h1>
            <div className={styles.menu}>
                <Button href="/" version='primary' size={btnSize}>Présentation</Button>
                <Button href="/Projets" version='primary' size={btnSize}>Mes projets</Button>
                <Button href="/Contact" version='primary' size={btnSize}>Contact</Button>
            </div>
        </header>
    )
}