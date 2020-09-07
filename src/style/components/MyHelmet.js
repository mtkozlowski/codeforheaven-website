import React from "react"
import { Helmet } from "react-helmet"

export default function MyHelmet({ data }) {
    const {
        description = "",
        domain = "https://codeforheaven.com",
        externalScriptsUrls = [],
        facebookThumbnail = "",
        title = "",
        slug = "",
    } = data;

    return (
      <Helmet>
        <title>{title} - Code for Heaven</title>

        <link rel="canonical" href={`${domain}/${slug}`} />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:description" content={description} />
        <meta property="og:title" content={title + " - Code for Heaven"} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${domain}/${slug}/`} />
        {facebookThumbnail
          ? <meta property="og:image" content={`${domain}${facebookThumbnail}`} />
          : ""}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {externalScriptsUrls.map(url => <script async src={url}></script>)}
      </Helmet>
    )
}