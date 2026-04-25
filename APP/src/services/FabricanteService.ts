import type { Fabricante } from "../types/FabricanteTypes";

const API_URL = "https://congenial-yodel-7v56gjx979v9fpv7g-3000.app.github.dev/Fabricante";

export async function getFabricantes(): Promise<Fabricante[]> {
    const response = await fetch(API_URL);
    return response.json();
}