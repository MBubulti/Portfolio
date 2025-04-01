import styles from "../styles/page.module.scss";
import '../styles/home.scss';
import { Download } from 'lucide-react';
import Image from 'next/image';
import profilPic from '../../public/portrait_maxime.jpg'


export default function Home() {
  return (
    
    <div className={styles.page}>
      <section className="display">
      <h2>Bienvenue</h2>
        <article className="display__intro">
          <Image className="display__intro__img" src={profilPic} alt="Photo de Maxime Buffet"/>
          <p className="display__intro__text">
          Passionné par l’informatique et les jeux vidéo depuis toujours, j’ai choisi de me reconvertir dans le développement, après 5 années dans l’Éducation Nationale en tant que professeur d’EPS.
          </p>
          <p className="display__intro__text">
            L’aspect méthodique du développement, où chaque problème peut être décortiqué et simplifié, me passionne. J’ai envie de continuer à apprendre et j’apprécie explorer de nouveaux projets et concepts.
Je suis également sensible aux enjeux du numérique responsable et aux bonnes pratiques qui permettent de réduire l’empreinte écologique du développement.<br/>
          </p>
          <p className="display__intro__text">
            En dehors du développement, j’ai une autre passion, le sport et plus particulièrement l’Ultimate Frisbee, un sport où le collectif est une clé pour la réussite.
          </p>
        </article>
        <article className="display__skills">
        <div className="display__skills--skill">
          <h3>Front-End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS et SASS</li>
            <li>Javascript</li>
            <li>React Native + NextJS</li>
            <li>NPM et Vite</li>
          </ul>
        </div>
        <div className="display__skills--skill">
          <h3>Back-End</h3>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>API REST</li>
          </ul>
        </div>
        <div className="display__skills--skill">
          <h3>Outils développement</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
          </ul>
        </div>
        </article>
        <article className="display__cv">
        <p>Vous pouvez télécharger directement mon CV</p>
        <Download/>
        </article>
        <article className="display__routes">
        <a>Pour en savoir plus sur mes différents projets ou travaux</a><br/>
        <a>Pour me contacter</a>
        </article>
      </section>
    </div>
  );
}
