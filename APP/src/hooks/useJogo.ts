import { useEffect, useState } from "react";
import { getJogos } from "../services/JogoService";
import type { Jogo } from "../types/JogoTypes";


export function useJogo() {
    const [jogo, setjogo] = useState<Jogo[]>([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState<String | null>(null)

    useEffect(()=>{
        async function fetchdata(){
            try{
                const data = await getJogos();
                setjogo(data)
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

    return{jogo, loading, error};
}