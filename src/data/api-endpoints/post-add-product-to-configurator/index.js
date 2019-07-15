export const route =
  "/configurators/{$configuratorId}/{$userId}/items/{$itemId}";

export const method = "POST";

export const description =
  "Ein Produkt zu einem bestimmten Konfigurator Item hinzufügen. Falls bereits ein Produkt hinzugefügt wurde, sollte dies einfach durch das Neue ersetzt werden.";

export { default as json } from "./example.json";
