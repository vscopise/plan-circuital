'use server';

import prisma from '@/lib/prisma';

interface Props {
    serie: string;
    numero: string;
}

export const getCircuito = async ({ serie, numero }: Props) => {
    try {
        const circuito = await prisma.datos_Circuitos.findFirst({
            where: {
                serie: serie.toUpperCase(),
                desde: { lte: parseInt(numero) },
                hasta: { gte: parseInt(numero) }
            }
        });
        return {
            ok: true,
            message: circuito?.direccion,
            accesible: circuito?.accesible,
        }
    } catch (error) {
        //console.log(error);

        return {
            ok: false,
            message: 'Error de base de datos'
        }
    }
}