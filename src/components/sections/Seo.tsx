import { Helmet } from 'react-helmet-async';

type Props = { title: string; description: string; path: string; jsonLd?: object };
const Seo = ({ title, description, path, jsonLd }: Props) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`https://tecsolengenharia.com.br${path}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`https://tecsolengenharia.com.br${path}`} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Tecsol Engenharia" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
  </Helmet>
);
export default Seo;
