import prisma from '@/lib/prisma';

interface Props {
    serie: string;
    numero: string;
}

export const getCircuito = async ({ serie, numero }: Props) => {

    let validate = true;

    if (!/^[a-zA-Z][a-zA-Z][a-zA-Z]+$/.test(serie)) {
        validate = false
    }
    if (!/(?<!\d)\d{1,5}(?!\d)$/.test(numero)) {
        validate = false
    }

    if (validate == false) {
        return {
            ok: true,
            mensaje: '',
            accesible: '',
        }
    } else {
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
                circuito: circuito?.circuito,
                mensaje: circuito?.direccion,
                accesible: circuito?.accesible,
            }
        } catch (error) {
            console.log(error);
            //throw new Error()

            return {
                ok: false,
                mensaje: 'Error de base de datos',
                accesible: '',
            }
        }

    }
}