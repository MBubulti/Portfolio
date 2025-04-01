'use client';
import {useState} from 'react';
//import Image from 'next/image';
import { CircleArrowUp } from 'lucide-react';
import { Copyright } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import '../styles/components/footer.scss';

export default function Footer(){
    const [isdirectTop, setDirectTop] = useState(false);
    return(
        <footer>
            <section>
            <h2>2025 Buffet Maxime <Copyright/></h2>
            <article className='links'>
                <a>Pour retrouver mon profil LinkedIn <Linkedin/></a><br/>
                <a>Pour retrouver mon profil GitHub <Github/></a>
            </article>
            </section>
            <CircleArrowUp className='backArrow' onClick={() =>setDirectTop(!isdirectTop)}/>
                {isdirectTop}
        </footer>
    )
}