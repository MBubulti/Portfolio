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
            <h3 className={styles.band} onClick={alterner}>{title}</h3>
            <ChevronDown onClick={alterner} className={`chevron ${collapse ? 'chevron__up' : 'chevron__down'}`}/>
        </div>
    )
}
