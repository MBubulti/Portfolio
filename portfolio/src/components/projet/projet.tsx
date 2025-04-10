'use client'
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import styles from '@/components/projet/projet.module.scss';
import ImgProjet from '@/components/projet/imgProjet/imgProjet';
import TextProjet from '@/components/projet/textProjet/textProjet'

type ProjetProps = {
    repoLink: string,
    srcImg: string,
    altImg:string,
    titleProjet: string,
    textProjet: string
}

export default function Projet({repoLink, srcImg, altImg, titleProjet, textProjet}: ProjetProps){

    return (
        <section className={styles.box}>
            <ImgProjet src={srcImg} alt={altImg}></ImgProjet>
            <article className={styles.infos}>
                <TextProjet title={titleProjet} text={textProjet}></TextProjet>
                <Link href={`${repoLink}`} target='_blank' className={styles.infos__link}><ExternalLink/></Link>
            </article>
        </section>
    )
}