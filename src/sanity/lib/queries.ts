import { groq } from 'next-sanity';

/* ===== SETTINGS ===== */

export const settingsQuery = groq`
  *[_type == "settings"][0] {
    siteTitle,
    tagline,
    payoff,
    socialLinks,
    pressContactEmail,
    generalContactEmail,
    donationUrl,
    newsroomUrl,
    goosLive,
    goosUrl
  }
`;

/* ===== PAGES ===== */

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    slug,
    seo,
    sections[] {
      _type,
      _key,
      ...
    }
  }
`;

/* ===== INITIATIVES ===== */

export const allInitiativesQuery = groq`
  *[_type == "initiative"] | order(order asc) {
    _id,
    title,
    slug,
    summary,
    gradientVariant,
    status,
    externalUrl,
    order
  }
`;

export const initiativeBySlugQuery = groq`
  *[_type == "initiative" && slug.current == $slug][0] {
    title,
    slug,
    summary,
    body,
    gradientVariant,
    status,
    externalUrl
  }
`;

/* ===== PEOPLE ===== */

export const allPeopleQuery = groq`
  *[_type == "person"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    pressContact,
    pressNote,
    order
  }
`;

export const pressContactsQuery = groq`
  *[_type == "person" && pressContact == true] | order(order asc) {
    _id,
    name,
    role,
    bio,
    pressNote
  }
`;

/* ===== PRESS ITEMS ===== */

export const allPressItemsQuery = groq`
  *[_type == "pressItem"] | order(publicationDate desc) {
    _id,
    title,
    publicationDate,
    type,
    externalUrl,
    publication,
    excerpt
  }
`;

/* ===== COMMUNITY ===== */

export const communityQuery = groq`
  *[_type == "community"][0] {
    headline,
    narrative,
    phasing,
    interestCaptureHeading,
    interestCaptureBody,
    privacyNotice
  }
`;
