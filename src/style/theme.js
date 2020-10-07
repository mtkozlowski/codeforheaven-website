import { colors } from "./colors"

const baseFontSize = 18,
  narrowSection = `${34 * baseFontSize}px`,
  regularSection = `768px`,
  wideSection = `1280px`

export const theme = {
  colors,
  font: {
    primaryFamily: "'Source Sans Pro', sans-serif",
    secondaryFamily:
      "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    boldFontWeight: 700,

    largeHeaderSize: "94px",
    subHeaderSize: "48px",
    blogPostTeaserSize: "24px",
    regularTextSize: `calc(16px + 0.2vw)`,

    /* MOBILE FONT SIZES */
    largeHeaderSize__Mobile: "72px",
  },

  narrowSection,
  regularSection,
  wideSection,

  media: {
    phone: "@media (max-width: 480px)",
    minPhone: "@media (min-width: 480px)",
    phoneS: "@media (max-width: 375px)",
    littleTablet: "@media (max-width: 768px)",
    tablet: "@media (max-width: 1080px)",
    desktop: "@media (min-width: 1080px)",
    narrowSection: `@media (max-width: ${narrowSection})`,
    regularSection: `@media (max-width: ${regularSection})`,
    minRegularSection: `@media (min-width: ${regularSection})`,
    wideSection: `@media (max-width: ${wideSection})`,
  },

  responsive: {
    tablet: "1024px",
    tabletVertical: "768px",
    mobile: "640px",
    mobileMid: "480px",
    mobileVertical: "360px",
  },
}
