import styles from '@/styles/page.module.scss';
import Image from 'next/image';
import profilPic from '../../public/portrait_maxime.jpg'
import CV from '@/components/cv/cv';
import CollapseBand from '@/components/collapseBand/collapseBand';
import frontend from '../../public/frontend.json'
import backend from '../../public/backend.json'
import outils from '../../public/outils.json'


export default function Home() {

  return (
    
    <div>
      <section className={styles.display}>
        <article className={styles.display__intro}>
          <Image priority={true} className={styles.display__intro__img} src={profilPic} alt="Photo de Maxime Buffet"/>
          <p className={styles.display__intro__text}>
          Passionné par l’informatique et les jeux vidéo depuis toujours, j’ai choisi de me reconvertir dans le développement, après 5 années dans l’Éducation Nationale en tant que professeur d’EPS.
          </p>
          <p className={styles.display__intro__text}>
            L’aspect méthodique du développement, où chaque problème peut être décortiqué et simplifié, me passionne. J’ai envie de continuer à apprendre et j’apprécie explorer de nouveaux projets et concepts.
            Je suis également sensible aux enjeux du numérique responsable et aux bonnes pratiques qui permettent de réduire l’empreinte écologique du développement.<br/>
          </p>
          <p className={styles.display__intro__text}>
            En dehors du développement, j’ai une autre passion, le sport et plus particulièrement l’Ultimate Frisbee, un sport où le collectif est une clé pour la réussite.
          </p>
        </article>
        <article  className={styles.display__skills}>
        <CollapseBand title='Front-End' list={frontend}/>
        <CollapseBand title='Back-End' list={backend}/>
        <CollapseBand title='Outils de développement' list={outils}/>
        </article>
        <CV/>
      </section>
    </div>
  );
}
