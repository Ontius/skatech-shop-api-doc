export const route =
  "/brands/{$brandId}/products/{$page}/{$limit}/{$sort}/{$filters}";

export const method = "GET";

export const description = "Alle Produkte eines bestimmten Herstllers";

export { default as json } from "./example.json";
