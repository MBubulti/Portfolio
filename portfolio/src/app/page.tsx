import styles from "../styles/page.module.scss";
import '../styles/home.scss';
import { Download } from 'lucide-react';



export default function Home() {
  return (
    
    <div className={styles.page}>
      <section className="display">
        <article>
          <h2>Bienvenue</h2>
          <p>
            Je suis un développeur fullstack débutant qui travaille sur React et son framework Next
          </p>
        </article>
        <article>
        mes compétences
        </article>
        <article>
        <Download/>
        CV
        </article>
        <article>
        Pour en savoir plus
        </article>
      </section>
    </div>
  );
}
