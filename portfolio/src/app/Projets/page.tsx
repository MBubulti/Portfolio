//import styles from '@/styles/projets.module.scss';
import Projet from '@/components/projet/projet';

const projetsDisplay = [
    {
        repoLink: 'https://github.com/MBubulti/Projet-5-Kasa',
        srcImg: '',
        titleProjet: 'Projet Kasa',
        textProjet: 'Projet réalisé au cours du parcours OpenClassrooms, il consiste en la construction du Backend d’un site de notation de livre. Technologies utilisées, MongoDB et NodeJS'
    },
    {
        repoLink: 'https://github.com/MBubulti/Projet-6-Grimoire',
        srcImg: '',
        titleProjet: 'Projet Booki',
        textProjet: 'Projet réalisé au cours du parcours OpenClassrooms, il consiste en la construction d’une application web de location immobilière avec React et Vite'
    }
]

export default function PageProjets(){

    return(
        <div>
            {projetsDisplay.map((projet, index) => (
        <Projet
          key={index}
          repoLink={projet.repoLink}
          srcImg={projet.srcImg}
          altImg={'Image illustrant le projet'}
          titleProjet={projet.titleProjet}
          textProjet={projet.textProjet}
        />
      ))}
        </div>
    )
}