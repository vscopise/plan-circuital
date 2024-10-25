'use client';

import Image from 'next/image';
import Link from 'next/link';

export const TopMenu = () => {
    return (
        <nav className="flex px-5 items-center w-full shadow-md bg-fagrayblue-300">
            <Link href="/" className='px-5'>
                <Image src="/img/logofa.png" width="50" height="50" alt="Frente Amplio" />
            </Link>
            <h2 className="font-bold leading-none text-center w-full">Buscador de Locales de Votación</h2>
        </nav>
    )
}
