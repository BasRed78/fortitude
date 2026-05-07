/**
 * Quotes uit het MIA-onderzoek voor de meedoen-landingspagina.
 *
 * De pagina toont de eerste quote in deze array prominent in beeld.
 * Volgorde aanpassen = welke quote er groot komt te staan.
 *
 * Vier quotes staan ook op de SPACE4AYA-visitekaartjes (vlag met
 * `onCard: true`).
 */

export interface MiaQuote {
  /** Stabiele id, gebruikt als React-key. Verander niet als de tekst gelijk blijft. */
  id: string;
  /** De quote zelf, zonder aanhalingstekens. */
  text: string;
  /** Optionele toeschrijving (voornaam of pseudoniem). Laat weg als anoniem. */
  author?: string;
  /** Markeer met true als deze quote ook op een visitekaartje staat. */
  onCard?: boolean;
}

export const miaQuotes: MiaQuote[] = [
  {
    id: 'placeholder-1',
    text: '[quote 1 uit MIA-onderzoek. Staat ook op visitekaartje.]',
    onCard: true,
  },
  {
    id: 'placeholder-2',
    text: '[quote 2 uit MIA-onderzoek. Staat ook op visitekaartje.]',
    onCard: true,
  },
  {
    id: 'placeholder-3',
    text: '[quote 3 uit MIA-onderzoek. Staat ook op visitekaartje.]',
    onCard: true,
  },
  {
    id: 'placeholder-4',
    text: '[quote 4 uit MIA-onderzoek. Staat ook op visitekaartje.]',
    onCard: true,
  },
  {
    id: 'placeholder-5',
    text: '[aanvullende quote uit MIA-onderzoek.]',
  },
  {
    id: 'placeholder-6',
    text: '[aanvullende quote uit MIA-onderzoek.]',
  },
];
