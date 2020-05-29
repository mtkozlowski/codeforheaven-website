import {colors} from './colors';

export const theme = {
    colors,
    font: {
        family: "Poppins, sans-serif;",
        boldFontWeight: 700,

        largeHeaderSize: "94px",
        subHeaderSize: "48px",
        blogPostTeaserSize: "24px",
        regularTextSize: "18px",

        /* MOBILE FONT SIZES */
        largeHeaderSize__Mobile: "72px",
    },

    media: {
        phone: '@media (max-width: 480px)',
        littleTablet: '@media (max-width: 768px)',
        tablet: '@media (max-width: 1080px)'
    },

    responsive: {
        tablet: "1024px",
        tabletVertical: "768px",
        mobile: "640px",
        mobileMid: "480px",
        mobileVertical: "360px",
    },

    regularSection: '1080px',
}