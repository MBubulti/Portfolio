'use client'
import React from 'react';
import { Download } from 'lucide-react';
import { Eye } from 'lucide-react';
import styles from '@/components/cv/cv.module.scss'

const CV = () => {
    const cvUrl = '/cv_buffet_maxime.pdf';

    const handleDL = () => {
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'cv_buffet_maxime.pdf';
        link.click();
    };

    const handlePreview = () => {
        window.open(cvUrl, '_blank');
    }


return (
    <article className={styles.cv}>
        <p>Vous pouvez retrouver ici mon CV</p>
        <Eye className={styles.cv__icon} onClick={handlePreview}/>
        <Download className={styles.cv__icon}  onClick={handleDL}/> 
    </article>
)
};

export default CV;