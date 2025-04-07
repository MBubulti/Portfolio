'use client'
import React from 'react';
import styles from '@/components/button/button.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type buttonProps = {
    href: string;
    children:React.ReactNode;
    version?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
};

export default function Button({ 
    href,
    children,
    version = 'primary',
    size = 'large'
}: buttonProps){
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={`${styles.btn} ${styles[version]} ${styles[size]} ${styles.btn} ${isActive ? styles.active : ''}`}
        >
      {children}
    </Link>
    );
}