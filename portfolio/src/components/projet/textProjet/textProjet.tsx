import styles from '@/components/projet/textProjet/textProjet.module.scss';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

type TextProps = {
    text: string,
    title: string,
    repository: string,
    technologies:string[]
}

export default function DescriptionProjet({title, text, repository, technologies}: TextProps) {

    return (
        <div className={styles.textProjet}>
            <div className={styles.title}>
                <h2>{title}</h2>
                <Link href={`${repository}`} target='_blank' className={styles.textProjet__link}><ExternalLink/></Link>
            </div>
            <p>Projet réalisé au cours du parcours OpenClassrooms, il consiste en la construction {text}</p>
            <ul>Technologies utilisées :
            {technologies.map((techno, index) => (
        <li
          key={index}
        >- {techno}</li>
      ))}
            </ul>
        </div>
    )
}