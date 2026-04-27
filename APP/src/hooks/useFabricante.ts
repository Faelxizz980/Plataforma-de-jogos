import { useEffect, useState } from "react";
import type { Fabricante } from "../types/FabricanteTypes";
import { getFabricantes } from "../services/FabricanteService";

export function useFabricante(){
    const [fabricante, setfabricante] = useState<Fabricante[]>([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState<String | null>(null);

    useEffect(()=>{
            async function fetchdata(){
                try{
                    const data = await getFabricantes();
                    setfabricante(data)
                }
                catch(err)
                {
                    seterror(`Erro ao carregar jogos: ${err instanceof Error ? err.message: "Erro desconhecido"}`)
                }
                finally{
                    setloading(false)
                }
            }
            fetchdata();
        }, [])
    
        return{fabricante, loading, error};
}