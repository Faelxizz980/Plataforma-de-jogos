import type { Jogo } from "../types/JogoTypes";

interface Props {
    jogo: Jogo;
    onClick: () => void
}

export function JogoCard({ jogo, onClick }: Props) {
    return (
        <div onClick={onClick} className="bg-gradient-to-b from-sky-700 to-sky-900 flex flex-col rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200 shadow-lg shadow-sky-900/50 cursor-pointer group">
            
            {/* Imagem com tamanho fixo */}
            <div className="w-full h-44 overflow-hidden">
                <img
                    src={jogo.fotos[0]}
                    alt={jogo.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Informações */}
            <div className="p-3 flex flex-col gap-1">
                <h2 className="text-white font-bold text-sm truncate">{jogo.nome}</h2>
                
                <span className="text-sky-300 text-xs truncate">{jogo.genero}</span>

                <div className="flex items-center justify-between mt-1">
                    <span className="bg-sky-500/30 text-sky-200 text-xs px-2 py-0.5 rounded-full">
                        +{jogo.classificacao} anos
                    </span>
                    <span className="text-sky-400 text-xs">
                        {new Date(jogo.data_lanc).getFullYear()}
                    </span>
                </div>
            </div>
        </div>
    )
}