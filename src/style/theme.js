import { colors } from "./colors"

export const theme = {
  colors,
  font: {
    import:
      "@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap')",
    primaryFamily: "'Source Sans Pro', sans-serif",
    secondaryFamily:
      "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    boldFontWeight: 700,

    largeHeaderSize: "94px",
    subHeaderSize: "48px",
    blogPostTeaserSize: "24px",
    regularTextSize: "18px",

    /* MOBILE FONT SIZES */
    largeHeaderSize__Mobile: "72px",
  },

  media: {
    phone: "@media (max-width: 480px)",
    littleTablet: "@media (max-width: 768px)",
    tablet: "@media (max-width: 1080px)",
    desktop: "@media (min-width: 1080px)",
    regularSection: "@media (max-width: 42rem)",
  },

  responsive: {
    tablet: "1024px",
    tabletVertical: "768px",
    mobile: "640px",
    mobileMid: "480px",
    mobileVertical: "360px",
  },

  regularSection: "42rem",
}
