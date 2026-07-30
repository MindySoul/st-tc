import type { Metadata } from 'next';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import CookieBanner from '@/components/site/CookieBanner';
import SiteEffects from '@/components/site/SiteEffects';
import './globals.css';

// Self-hospedada no build: some o request pro Google Fonts em runtime (era um
// @import render-blocking no index.css) e o preconnect deixa de ser necessario.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
});

const GTM_ID = 'GTM-PD3FWZPH';
const OG_IMAGE =
  'https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/82b9ff4e-8f15-42cb-a7cc-924837ba56ec';

export const metadata: Metadata = {
  metadataBase: new URL('https://tecsolengenharia.com.br'),
  title: 'Energia Solar em Linhares ES | Tecsol Engenharia',
  description:
    'Referência em soluções energéticas no ES desde 2015. +4.000 famílias, +R$60M economizados. Parceiro Fortlev Solar. Simule sua economia agora.',
  authors: [{ name: 'Tecsol Engenharia' }],
  keywords: [
    'energia solar Linhares',
    'energia solar ES',
    'energia solar fotovoltaica',
    'Fortlev Solar',
    'energia solar residencial',
    'energia solar comercial',
    'energia solar rural',
  ],
  verification: {
    google: 'OxUpRqXYnCkAfDwdZfywWmgYH9_Syr6pTZeV08WZjN4',
  },
  openGraph: {
    type: 'website',
    siteName: 'Tecsol Engenharia',
    locale: 'pt_BR',
    title: 'Energia Solar em Linhares ES | Tecsol Engenharia',
    description:
      'Referência em soluções energéticas no ES desde 2015. +4.000 famílias, +R$60M economizados. Parceiro Fortlev Solar. Simule sua economia agora.',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energia Solar em Linhares ES | Tecsol Engenharia',
    description:
      'Referência em soluções energéticas no ES desde 2015. +4.000 famílias, +R$60M economizados. Parceiro Fortlev Solar. Simule sua economia agora.',
    images: [OG_IMAGE],
  },
};

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Tecsol Engenharia',
  image: OG_IMAGE,
  logo: OG_IMAGE,
  '@id': 'https://tecsolengenharia.com.br',
  url: 'https://tecsolengenharia.com.br',
  telephone: '+5527999717766',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Cerejeira, 280, Complexo Prima Cittá Business, Torre 01, Sala 618',
    addressLocality: 'Linhares',
    addressRegion: 'ES',
    postalCode: '29906-014',
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
  ],
  areaServed: ['Linhares', 'Colatina', 'São Mateus', 'Aracruz', 'Espírito Santo'],
  sameAs: ['https://instagram.com/tecsolengenharia'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS) }}
        />
      </head>
      <body className="font-sans">
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="min-h-screen flex flex-col bg-background">
          <SiteEffects />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFab />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
