import styles from '@/styles/projets.module.scss';
import Projet from '@/components/projet/projet';
import projets from '../../../public/projets.json';

export type Projet = {
    img: string;
    title: string;
    text: string;
    repository: string;
    technologies: string[];
  };


export default function PageProjets(){

    return(
        <div className={styles.projets}>
            {projets.map((projet, index) => (
        <Projet 
          key={index}
          project={projet}
        />
      ))}
        </div>
    )
}