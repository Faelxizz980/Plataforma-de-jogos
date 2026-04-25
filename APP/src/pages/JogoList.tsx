import { useEffect, useState } from "react";
import { getJogos } from "../services/JogoService";
import { getFabricantes } from "../services/FabricanteService";
import type { Jogo } from "../types/JogoTypes";
import { JogoCard } from "../components/JogoCard";
import { JogoModal } from "../components/JogoModal";
import type { Fabricante } from "../types/FabricanteTypes";


export function JogoList(){
    const [jogo, setJogo] = useState<Jogo[]>([]);
    const [fabricante, setfabricante] = useState<Fabricante[]>([])
    const [jogoselecionado, setjogoselecionado] = useState<Jogo | null>(null);
    useEffect(() =>{
    getJogos().then(setJogo);
   getFabricantes().then(setfabricante)
    
}, []);

return(
    <>
        <div className="bg-gray-800 grid grid-cols-4 gap-4 p-4 min-h-screen">
            <h1 className="text-white text-4xl font-bold col-span-4 text-center">Jogos</h1>
            {jogo.map((j) =>(
                <JogoCard
                    key={j.id}
                    jogo={j}
                    onClick={() => setjogoselecionado(j)}
                />
            ))}
        </div>

        {jogoselecionado && (
            <JogoModal
                jogo={jogoselecionado}
                fabricante={fabricante.find((f) => Number(f.id) === Number(jogoselecionado.fabricante_id))!}
                onClose={() => setjogoselecionado(null)}
            />
        )}
    </>
)
}

