export const route =
  "/productstreams/{$streamId}/products/{$page}/{$limit}/{$sort}/{$filters}";

export const method = "GET";

export const description = "Alle Produkte eines bestimmten Productstreams";

export { default as json } from "./example.json";
