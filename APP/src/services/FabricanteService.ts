import { api } from "./api";
import type { Fabricante } from "../types/FabricanteTypes";


export async function getFabricantes(): Promise<Fabricante[]> {
    const response = await api.get("/Fabricante")
    return response.data;
}