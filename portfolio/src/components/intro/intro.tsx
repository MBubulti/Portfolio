import styles from '@/components/intro/intro.module.scss';
import Image from 'next/image';
import profilPic from '../../../public/portrait_maxime.jpg'

export default function Intro(){

    return (
        <article className={styles.intro}>
          <Image priority={true} className={styles.intro__img} src={profilPic} alt="Photo de Maxime Buffet"/>
          <div className={styles.intro__text}>
            <p className={styles.intro__text}>
              Passionné par l’informatique et les jeux vidéo depuis toujours, j’ai choisi de me reconvertir dans le développement, après 5 années dans l’Éducation Nationale en tant que professeur d’EPS.
            </p>
            <p className={styles.intro__text}>
              L’aspect méthodique du développement, où chaque problème peut être décortiqué et simplifié, me passionne. J’ai envie de continuer à apprendre et j’apprécie explorer de nouveaux projets et concepts.
              Je suis également sensible aux enjeux du numérique responsable et aux bonnes pratiques qui permettent de réduire l’empreinte écologique du développement.<br/>
            </p>
            <p className={styles.intro__text}>
              En dehors du développement, j’ai une autre passion, le sport et plus particulièrement l’Ultimate Frisbee, un sport où le collectif est une clé pour la réussite.
            </p>
          </div>
        </article>
    )
}