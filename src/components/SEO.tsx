import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = 'KLH',
  description = 'Scopri KLH, il tuo rifugio perfetto per una vacanza indimenticabile. Esplora i nostri servizi, la nostra location e le attrazioni nelle vicinanze.',
  keywords = 'hotel, alloggio, vacanze, turismo, ospitalità',
  image = '/og-image.jpg', // Assicurati di aggiungere un'immagine OG nella cartella public
  url = 'https://klh-hotel.com', // Sostituisci con il tuo dominio effettivo
}: SEOProps) => {
  const siteTitle = `${title} | KLH Hotel`;

  return (
    <Helmet>
      {/* Titolo e Meta Tags di Base */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Altri Meta Tags Importanti */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      
      {/* Favicon - Assicurati di avere questi file nella cartella public */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Helmet>
  );
};

export default SEO;
