'use client';
//import Image from 'next/image';
import { CircleArrowUp } from 'lucide-react';
import styles from '@/components//footer/footer.module.scss'
import Link from 'next/link';

export default function Footer(){
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };
    return(
        <footer>
            <section className={styles.footerLinks}>
                    <article className={styles.boxExternalLinks__links}>
                        <Link href={`https://www.linkedin.com/in/maximebuffet10/`} target="_blank">LinkedIn</Link>
                        <Link href={`https://github.com/MBubulti`} target="_blank">GitHub</Link>
                    </article>
            </section>
            <CircleArrowUp className={styles.topArrow} onClick={ScrollToTop}/>
            <p>© Copyright 2025 - Maxime BUFFET</p>
        </footer>
    )
}