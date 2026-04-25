import { useState } from "react";
import type { Jogo } from "../types/JogoTypes";
import type { Fabricante } from "../types/FabricanteTypes";

interface Props {
    jogo: Jogo;
    fabricante: Fabricante;
    onClose: () => void;
}

export function JogoModal({ jogo, fabricante, onClose }: Props) {
    const [fotoAtiva, setFotoAtiva] = useState(0);

    if (!fabricante) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 " onClick={onClose}>
            <div className="bg-sky-950 rounded-xl w-full max-w-lg overflow-hidden " onClick={(e) => e.stopPropagation()}>

                <div className="relative h-48 w-full group">
                    <img src={jogo.fotos[fotoAtiva]} className="w-full h-full object-cover" />

                    {fotoAtiva > 0 && (
                        <button
                            onClick={() => setFotoAtiva(fotoAtiva - 1)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-black/50 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            ‹
                        </button>
                    )}
                    {fotoAtiva < jogo.fotos.length - 1 && (
                        <button
                            onClick={() => setFotoAtiva(fotoAtiva + 1)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-black/50 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            ›
                        </button>
                    )}
                    <button
                        onClick={onClose}
                        className="absolute top-3 left-3 bg-black/50 text-white cursor-pointer text-sm px-3 py-1 rounded-lg">
                        ✕
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {jogo.fotos.map((_, index) => (
                            <div
                                key={index}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${index === fotoAtiva ? "bg-white" : "bg-white/40"}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="text-white font-bold">{jogo.nome}</h3>
                    <p className="text-sky-400">{fabricante.nome}</p>

                    <div className="flex gap-2 flex-wrap my-2">
                        {jogo.genero.split(", ").map((g) => (
                            <span key={g} className="bg-sky-500/30 text-sky-200 text-xs px-3 py-1 rounded-full">{g}</span>
                        ))}
                    </div>

                    <p className="text-sky-200/70 text-sm">{jogo.descricao}</p>

                    <div className="flex gap-2 my-2">
                        {jogo.fotos.map((foto, index) => (
                            <img
                                key={index}
                                src={foto}
                                onClick={() => setFotoAtiva(index)}
                                className={`w-20 h-12 object-cover rounded-lg cursor-pointer transition-all ${index === fotoAtiva ? "ring-2 ring-sky-400" : "opacity-60 hover:opacity-100"}`}
                            />
                        ))}
                    </div>

                    <button className="w-full bg-sky-600 text-white py-2 rounded-lg mt-2 hover:bg-sky-800 cursor-pointer">
                        Ver mais na loja
                    </button>
                </div>
            </div>
        </div>
    )
}