'use client'
import styles from '@/components/collapseBand/collapseBand.module.scss';
import { useState } from 'react';
import Band from './Band';


type collapseProps = {
    title: string,
    list: string[],
};

const generateLi = (items: string[]) => {
    return items.map((item, index) => <li key={index} className={styles.title__droplist}>{item}</li>);
};

export default function CollapseBand({title, list}: collapseProps){
    const [collapse, setCollapse] = useState(false);
    //const [collapseDrop, isDroped] = useState(true);
    const toggleCollapse = () => {
        setCollapse(!collapse);
        //isDroped(false);
    };

    return (
        <div className={styles.skillsBand}>
            <Band
            title={title}
            alterner={toggleCollapse}
            collapse={collapse}/>
            {collapse && (
            <ul className={styles.title__dropmenu}>
                {generateLi(list)}
            </ul>)}
        </div>
    )
}