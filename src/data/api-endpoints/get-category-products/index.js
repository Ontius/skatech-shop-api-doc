export const route =
  "/categories/{$categoryId}/products/{$page}/{$limit}/{$sort}/{$filters}";

export const method = "GET";

export const description = "Alle Produkte einer bestimmten Kategorie";

export { default as json } from "./example.json";
