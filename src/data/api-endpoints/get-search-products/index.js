export const route =
  "/search/{$searchTerm}/{$page}/{$limit}/{$sort}/{$filters}";

export const method = "GET";

export const description = "Alle Produkte, die der Suchanfrage entsprechen";

export { default as json } from "./example.json";
