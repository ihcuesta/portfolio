import Head from "next/head";
import favicon from "../public/img/favicon.png";

export const HeadMetas = () => {
  return (
    <Head>
      <link rel="icon" type="image/png" sizes="32x32" href={favicon.src}></link>

      <title>Iván Herranz: Web Dev Frontend | UI</title>
      <meta name="title" content="Iván Herranz: Web Dev Frontend | UI" />
      <meta
        name="description"
        content="This is my portfolio. A collection of sites developed in HTML, CSS, SASS, Tailwind, JS, React, Redux and other frontend technologies."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Iván Herranz: Web Dev Frontend | UI" />
      <meta
        property="og:description"
        content="This is my portfolio. A collection of sites developed in HTML, CSS, SASS, Tailwind, JS, React, Redux and other frontend technologies."
      />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta
        property="twitter:title"
        content="Iván Herranz: Web Dev Frontend | UI"
      />
      <meta
        property="twitter:description"
        content="This is my portfolio. A collection of sites developed in HTML, CSS, SASS, Tailwind, JS, React, Redux and other frontend technologies."
      />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      ></meta>
    </Head>
  );
};
