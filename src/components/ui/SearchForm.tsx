'use client';

import { useState } from 'react';
import { getCircuito } from '@/actions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
    mensaje: string;
    accesible: string;
}

export const SearchForm = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

     const [serie, setSerie] = useState('');
    const [numero, setNumero] = useState('');
    /*const [message, setMessage] = useState('');
    const [esAccesible, setEsAccesible] = useState(''); */

    const handleFilter = useDebouncedCallback((term: string, field: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set(field, term);
        } else {
            params.delete(field);
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);



    /* const onSubmit = async () => {
        //console.log({ serie, numero });
        if (!/^[a-zA-Z][a-zA-Z][a-zA-Z]+$/.test(serie)) {
            setMessage('Error en la serie');
            return;
        }

        if (!/(?<!\d)\d{1,5}(?!\d)$/.test(numero)) {
            setMessage('Error en el numero');
            return;
        }
        setMessage('ok, cargando...');
        const { ok, message = '', accesible = '' } = await getCircuito({ serie, numero });

        setEsAccesible(accesible)
        //console.log({message})
        if (ok) {
            setMessage(message);
            setEsAccesible(`Accesible: ${accesible}`);
            return;
        }
    }; */
    //useEffect(() => {
    //}, [numero, serie]);

    return (
        <>
            <p>Serie</p>
            <input
                name="serie"
                type="text"
                autoFocus
                maxLength={3}
                placeholder="XXX"
                className="input-text"
                onChange={(e) => handleFilter(e.target.value, 'serie')}
            />
            <p>Número</p>
            <input
                name="numero"
                type="tel"
                pattern="[0-9]{5}"
                placeholder="XXXXX"
                className="input-text"
                onChange={(e) => handleFilter(e.target.value, 'numero')}
            />

            
        </>
    );
}
