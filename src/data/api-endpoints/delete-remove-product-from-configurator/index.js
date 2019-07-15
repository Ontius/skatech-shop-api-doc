export const route =
  "/configurators/{$configuratorId}/{$userId}/items/{$itemId}";

export const method = "DELETE";

export const description =
  "Ein Konfigurator Item leeren. Dadurch muss der Kunde ein neues Produkt auswählen für diesen Konfigurator Item.";

export { default as json } from "./example.json";
