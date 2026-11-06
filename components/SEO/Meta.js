import React from "react";
import Head from "next/head";

const url = "https://ubuntu.dawidolko.pl/";
const title = "Ubuntu Desktop Simulator | Browser OS by Dawid Olko";
const description =
  "An Ubuntu desktop simulated in the browser with Next.js and Tailwind CSS: dock, draggable windows, terminal, settings and working demo applications.";
const image = `${url}og-image.jpg`;
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Ubuntu Desktop Simulator",
  url,
  description,
  applicationCategory: "BrowserApplication",
  operatingSystem: "Any web browser",
  author: {
    "@type": "Person",
    name: "Dawid Olko",
    jobTitle: "Fullstack / AI Developer",
    url: "https://dawidolko.pl",
  },
};

export default function Meta() {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="author" content="Dawid Olko" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#E95420" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ubuntu Desktop Simulator" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Simulated Ubuntu desktop" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <link rel="icon" href="/images/logos/fevicon.svg" />
      <link rel="apple-touch-icon" href="/images/logos/logo.png" />
    </Head>
  );
}
