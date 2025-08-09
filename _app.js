import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Healthy Strong Life</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Allura&family=Montserrat:wght@400;600&family=Playfair+Display:wght@500;700&family=Raleway:wght@400;600&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>);
}
