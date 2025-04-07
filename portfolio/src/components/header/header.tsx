'use client';
//import Image from 'next/image';
import Button from '../button/button';
import styles from '@/components/header/header.module.scss'


export default function Header(){
    return(
        <header>
            <h1 className={styles.title}>BUFFET Maxime Portfolio</h1>
            <div className={styles.menu}>
                <Button href="/" version='primary' size='small'>Présentation</Button>
                <Button href="/projects" version='primary' size='small'>Mes projets</Button>
                <Button href="/contact" version='primary' size='small'>Contact</Button>
            </div>
        </header>
    )
}