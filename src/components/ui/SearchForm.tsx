'use client';

import { useState } from 'react';
import { getCircuito } from '@/actions';


export const SearchForm = () => {

    const [serie, setSerie] = useState('');
    const [numero, setNumero] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async () => {
        //console.log({ serie, numero });
        if (!/^[a-zA-Z][a-zA-Z][a-zA-Z]+$/.test(serie)) {
            setMessage('Error en la serie')
            return
        }

        if (!/(?<!\d)\d{1,5}(?!\d)$/.test(numero)) {
            setMessage('Error en el numero')
            return
        }
        setMessage('ok, cargando...')
        const { ok, message } = await getCircuito({ serie: "", numero: "" })
        //console.log({message})
        if (ok) {
            setMessage(message);
        }
    }

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
                onChange={(e) => setSerie(e.target.value)}
                value={serie}
            />
            <p>Número</p>
            <input
                name="numero"
                type="tel"
                pattern="[0-9]{5}"
                placeholder="XXXXX"
                className="input-text"
                onChange={(e) => setNumero(e.target.value)}
                value={numero}
            />
            <div>
                <button
                    className='btn-primary'
                    onClick={() => onSubmit()}
                >
                    Consultar
                </button>
            </div>
            <div className="text-2xl">{message}</div>
        </>
    )
}
