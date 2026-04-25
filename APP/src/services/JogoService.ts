import type { Jogo } from "../types/JogoTypes";

const API_URL = "http://localhost:3000/jogo";

export async function getJogos(): Promise<Jogo[]> {
    const response = await fetch(API_URL);
    return response.json();
}