import styles from '@/components/collapseBand/collapseBand.module.scss';
import { ChevronDown } from 'lucide-react';

type bandProps = {
    title: string,
    collapse: boolean,
    alterner: () => void,
};

export default function Band({title, collapse, alterner}: bandProps){
    return (
        <div className={styles.band}>
            <h2 className={styles.band} onClick={alterner}>{title}</h2>
            <ChevronDown onClick={alterner} className={`chevron ${collapse ? 'chevron__up' : 'chevron__down'}`}/>
        </div>
    )
}
