import styles from '@/components/projet/textProjet/textProjet.module.scss';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

type TextProps = {
    text: string,
    title: string,
    repoLink: string
}

export default function DescriptionProjet({title, text, repoLink}: TextProps) {

    return (
        <div className={styles.textProjet}>
            <div className={styles.title}>
                <h2>{title}</h2>
                <Link href={`${repoLink}`} target='_blank' className={styles.textProjet__link}><ExternalLink/></Link>
            </div>
            <p>{text}</p>
        </div>
    )
}