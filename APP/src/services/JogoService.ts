import { api } from "./api";
import type { Jogo } from "../types/JogoTypes";

export async function getJogos(): Promise<Jogo[]>{
    const response = await api.get("/jogo");
    return  response.data;
}