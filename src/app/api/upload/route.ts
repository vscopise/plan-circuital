import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {

    await prisma.datos_Circuitos.deleteMany({});

    const body = await req.json();

    const csv = body.csv.data;
    //console.log(csv);

    for (let i = 0; i < csv.length; i += 1) {
        const row = csv[i];
        const data = {
            circuito: parseInt(row[0]),
            serie: row[1],
            desde: parseInt(row[2]),
            hasta: parseInt(row[3]),
            direccion: row[5],
            accesible: row[6],
        }
        console.log(data);
        await prisma.datos_Circuitos.create({ data });
        /* await prisma.datos_Circuitos.create({data:{
            circuito: 1,
            serie: '',
            desde: 1,
            hasta: 1,
            direccion: '',
            accesible
        }}) */
    }

    //const csvData = data?.json

    //console.log('req')

    //return NextResponse.json({ title: { title } }, { status: 201 });
    return NextResponse.json(csv, { status: 200 });

}