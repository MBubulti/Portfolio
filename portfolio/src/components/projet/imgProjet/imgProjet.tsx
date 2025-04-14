import Image from 'next/image';
import styles from '@/components/projet/imgProjet/imgProjet.module.scss';

type ImgProps = {
    alt: string,
    src: string
}

export default function ImgProjet({src, alt}: ImgProps){

    return (
        <Image className={styles.ImgProjet} priority={true} src={src} alt={alt} width={300} height={250}/>
    )
}