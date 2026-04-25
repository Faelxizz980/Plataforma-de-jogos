import type { Jogo } from "../types/JogoTypes";

const API_URL = "https://congenial-yodel-7v56gjx979v9fpv7g-3000.app.github.dev/jogo";

export async function getJogos(): Promise<Jogo[]> {
    const response = await fetch(API_URL);
    return response.json();
}