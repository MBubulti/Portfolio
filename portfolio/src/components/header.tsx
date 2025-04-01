'use client';
import {useState} from 'react';
//import Image from 'next/image';
import { Menu } from 'lucide-react';
import '../styles/components/header.scss';

export default function Header(){
    const [isMenuOpen, setMenuOpen] = useState(false);
    return(
        <header>
            <h1 className='__className_3ee845'>BUFFET Maxime Portfolio</h1>
            <div className='menu__'>
            <button className='menu__btn' onClick={() => setMenuOpen(!isMenuOpen)}><Menu/></button>
            {isMenuOpen && (
                <ul className={`menu__dropdown ${isMenuOpen ? "menu__open" : ""}`}>
                        <li style={{ animationDelay: "0.1s" }}>A propos</li>
                        <li style={{ animationDelay: "0.2s" }}>Mes projets</li>
                        <li style={{ animationDelay: "0.3s" }}>Contact</li>
                </ul>
            )}
            </div>
        </header>
    )
}