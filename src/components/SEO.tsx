import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
}

export default function SEO({ 
  title = "Geo-Conecta | Consultoria Mineral, Geologia e Meio Ambiente",
  description = "A Geo-Conecta é uma consultoria mineral premium especializada em processos na ANM, Geologia Aplicada e Licenciamento Ambiental.",
  canonical = "https://geo-conecta.com.br",
  ogType = "website",
  ogImage = "https://geo-conecta.com.br/imagens/logo_main.webp",
  twitterCard = "summary_large_image",
  keywords = "consultoria mineral, ANM, geologia, licenciamento ambiental, mineração, geotecnia, hidrogeologia, mapeamento geológico, Geo-Conecta",
  schemaJson = null
}: SEOProps & { keywords?: string, schemaJson?: any }) {
  const siteTitle = title.includes("Geo-Conecta") ? title : `${title} | Geo-Conecta`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Geo-Conecta" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (Schema.org) */}
      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
}
