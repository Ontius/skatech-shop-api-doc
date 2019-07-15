export const route = "/configurators/{$configuratorId}";

export const method = "DELETE";

export const description =
  "Ein kompletter Konfigurator leeren. Dadurch muss der Kunde den ganzen Konfigurator nochmals neu abfüllen.";

export { default as json } from "./example.json";
