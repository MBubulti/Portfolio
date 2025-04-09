import styles from '@/styles/page.module.scss';
import CV from '@/components/cv/cv';
import CollapseBand from '@/components/collapseBand/collapseBand';
import frontend from '../../public/frontend.json'
import backend from '../../public/backend.json'
import outils from '../../public/outils.json'
import Intro from '@/components/intro/intro';


export default function Home() {

  return (
    
    <div>
      <section className={styles.display}>
        <Intro/>
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
