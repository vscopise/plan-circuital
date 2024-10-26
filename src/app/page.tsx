import { getCircuito } from "@/actions";
import { SearchForm } from "@/components"

interface Props {
  searchParams: {
    serie?: string;
    numero?: string;
  }
}

export default async function Home({ searchParams}: Props) {

  //const { serie='', numero='' } = await searchParams

  //const { serie, numero } =  searchParams;
  const serie =  searchParams?.serie || '';
  const numero = searchParams?.numero || '';

  const { ok, mensaje = '', accesible = '' } = await getCircuito({ serie, numero })

  //if (!ok) return null;

  return (
    <main className="min-h-screen text-center py-2 px-2">
      <SearchForm />
      <div className="text-2xl pt-3">
        <p>{mensaje}</p>
        <p>{accesible}</p>
      </div>
    </main>
  );
}
