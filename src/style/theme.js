import { colors } from './colors';

const narrowSection = `30rem`,
  regularSection = `44.4rem`,
  wideSection = `80rem`;

export const theme = {
  colors,
  font: {
    primaryFamily: 'DM Sans, sans-serif',
    secondaryFamily: 'DM Mono, monospace',
    boldFontWeight: 700,

    largeHeaderSize: '94px',
    subHeaderSize: '48px',
    blogPostTeaserSize: '24px',
    regularTextSize: `16px`,

    /* MOBILE FONT SIZES */
    largeHeaderSize__Mobile: '72px',
  },

  narrowSection,
  regularSection,
  wideSection,

  media: {
    phone: '@media (max-width: 480px)',
    minPhone: '@media (min-width: 480px)',
    phoneS: '@media (max-width: 375px)',
    littleTablet: '@media (max-width: 768px)',
    tablet: '@media (max-width: 1080px)',
    desktop: '@media (min-width: 1080px)',
    narrowSection: `@media (max-width: ${narrowSection})`,
    regularSection: `@media (max-width: ${regularSection})`,
    minRegularSection: `@media (min-width: ${regularSection})`,
    wideSection: `@media (max-width: ${wideSection})`,
  },

  responsive: {
    tablet: '1024px',
    tabletVertical: '768px',
    mobile: '640px',
    mobileMid: '480px',
    mobileVertical: '360px',
  },
};
