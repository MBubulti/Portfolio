import styles from '@/components/collapseBand/collapseBand.module.scss';

type bandProps = {
    title: string,
    list: string[],
};

const generateLi = (items: string[]) => {
    return items.map((item, index) => <li key={index} className={styles.title__dropmenu}>{item}</li>);
};

export default function CollapseBand({title, list}: bandProps){


    return (
        <div>
            <h3 className={styles.title}>{title}</h3>
            <ul>
                {generateLi(list)}
            </ul>
        </div>
    )
}