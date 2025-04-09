import Image from 'next/image';

type ImgProps = {
    alt: string,
    src: string
}

export default function ImgProjet({src, alt}: ImgProps){

    return (
        <Image priority={true} src={src} alt={alt}/>
    )
}