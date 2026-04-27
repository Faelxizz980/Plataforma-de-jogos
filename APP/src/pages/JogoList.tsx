import { useState } from "react";
import { useJogo } from "../hooks/useJogo";
import { useFabricante } from "../hooks/useFabricante";
import { JogoCard } from "../components/JogoCard";
import { JogoModal } from "../components/JogoModal";
import type { Jogo } from "../types/JogoTypes";


export function JogoList() {
    const { jogo, loading: loadingJogos, error: errorJogos } = useJogo();
    const { fabricante, loading: loadingFabricantes, error: errorFabricantes } = useFabricante();
    const [jogoselecionado, setjogoselecionado] = useState<Jogo | null>(null);

    if (loadingJogos || loadingFabricantes) {
        return (
            <div className="bg-gray-800 flex items-center justify-center min-h-screen">
                <p className="text-white text-xl">Carregando...</p>
            </div>
        );
    }

    if (errorJogos || errorFabricantes) {
        return (
            <div className="bg-gray-800 flex items-center justify-center min-h-screen">
                <p className="text-red-400 text-xl">{errorJogos || errorFabricantes}</p>
            </div>
        );
    }

    return (
        <>
            <div className="bg-gray-800 grid grid-cols-4 gap-4 p-4 min-h-screen">
                <h1 className="text-white text-4xl font-bold col-span-4 text-center">Jogos</h1>
                {jogo.map((j) => (
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
    );
}