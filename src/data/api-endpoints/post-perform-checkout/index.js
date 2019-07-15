export const route = "/users/{$userId}/checkout";

export const method = "POST";

export const description =
  "Bestellung auslösen. Als Antwort wird die erstellte Bestellung mit allen Produkten und Preisen erwartet.";

export { default as json } from "./example.json";
