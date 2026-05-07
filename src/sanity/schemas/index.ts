import { page } from './page';
import {
  heroSection,
  textBlock,
  initiativesGrid,
  quoteBlock,
  ctaBlock,
  teamGrid,
} from './sections';
import { initiative } from './initiative';
import { person } from './person';
import { pressItem } from './pressItem';
import { settings } from './settings';
import { community } from './community';

export const schemaTypes = [
  // Documents
  page,
  initiative,
  person,
  pressItem,
  settings,
  community,

  // Section block types (used inside page.sections array)
  heroSection,
  textBlock,
  initiativesGrid,
  quoteBlock,
  ctaBlock,
  teamGrid,
];
