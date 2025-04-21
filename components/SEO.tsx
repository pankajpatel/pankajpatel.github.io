import Head from "next/head";
import metadata from "../data/config";

const SEO = ({ description, lang, meta, title }: SEOProps) => {
  const metaDescription = description || metadata.description;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={`%s | ${metadata.title}`} />
      <link rel="icon" href="/favicon.ico" />
      {[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: metadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'p:domain_verify',
          content: "95a26872f3e0d41d50578baf4aaa8835",
        },
      ]
        .concat(meta || [])
        .map((item, index) => (
          <meta name={item.name} content={item.content} key={index} />
        ))}
    </Head>
  );
};

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [
    {
      name: string;
      content: string;
    }
  ];
  title: string;
}

export default SEO;
