'use client'
import React from 'react';
import { Eye } from 'lucide-react';
import styles from '@/components/cv/cv.module.scss'

const CV = () => {
    const cvUrl = '/cv_buffet_maxime.pdf';

    const handlePreview = () => {
        window.open(cvUrl, '_blank');
    }


return (
    <article className={styles.cv}>
        <p className={styles.cv__text}>Mon CV</p>
        <Eye className={styles.cv__icon} onClick={handlePreview}/>
    </article>
)
};

export default CV;