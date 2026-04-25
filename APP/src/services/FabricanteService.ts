import type { Fabricante } from "../types/FabricanteTypes";

const API_URL = "http://localhost:3000/Fabricante";

export async function getFabricantes(): Promise<Fabricante[]> {
    const response = await fetch(API_URL);
    return response.json();
}