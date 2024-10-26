import { getCircuito } from '@/actions';
import React from 'react'
import { SearchForm } from './SearchForm';
import { useSearchParams } from 'next/navigation';

interface Props {
    serie?: string;
    numero?: string;

}

export const Search = async ({ serie = '', numero = '' }: Props) => {

    /* const searchParams = useSearchParams()

    const serie = searchParams.get('serie');
    const numero = searchParams.get('numero'); */
    // const numero = searchParams?.numero || '';

    const { ok, mensaje, accesible } = await getCircuito({ serie, numero })

    if (!ok) return null;

    return (

        <>
            <SearchForm />
            <div className="text-2xl pt-3">
                <p>{mensaje}</p>
                <p>{accesible}</p>
            </div>
        </>
    )
}
