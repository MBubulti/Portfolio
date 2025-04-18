'use client'
import styles from '@/components/projet/projet.module.scss';
import ImgProjet from '@/components/projet/imgProjet/imgProjet';
import TextProjet from '@/components/projet/textProjet/textProjet'

type ProjetProps = {
    project: {
    img: string;
    title: string;
    text: string;
    repository: string;
    technologies: string[]
    }
}

export default function Projet({project}: ProjetProps){

    return (
        <section className={styles.box}>
            <ImgProjet src={project.img} alt={`Image illustrant le projet ${project.title}`}></ImgProjet>
            <article className={styles.infos}>
                <TextProjet title={project.title} text={project.text} technologies={project.technologies} repository={project.repository}></TextProjet>
                
            </article>
        </section>
    )
}