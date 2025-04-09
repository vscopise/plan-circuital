import { getCircuito } from "@/actions";
import { SearchForm } from "@/components"
import clsx from "clsx";

interface Props {
  searchParams: {
    serie?: string;
    numero?: string;
  }
}

export default async function Home({ searchParams }: Props) {

  //const { serie='', numero='' } = await searchParams

  //const { serie, numero } =  searchParams;
  const serie = searchParams?.serie || '';
  const numero = searchParams?.numero || '';

  const { ok, mensaje = '', accesible = '', municipio = '', circuito = '' } = await getCircuito({ serie, numero })

  //if (!ok) return null;

  return (
    <main className="min-h-screen text-center py-2 px-2">
      <SearchForm />
      <div className="text-2xl pt-3">
        <p className={
          clsx(
          "mb-5",  
          {
            'hidden': '' === circuito
          })}>
          {`Circuito: ${circuito}`}</p>
          <p className={
          clsx(
          "mb-5",  
          {
            'hidden': '' === mensaje
          })}>
            {mensaje}</p>
            <p className={
          clsx(
          "mb-5",  
          {
            'hidden': '' === municipio
          })}>
            {`Municipio: ${municipio}`}</p>
            <p className={
          clsx(
          "mb-5",  
          {
            'hidden': '' === accesible
          })}>
            {`Accesible: ${accesible}`}</p>
      </div>
    </main>
  );
}
