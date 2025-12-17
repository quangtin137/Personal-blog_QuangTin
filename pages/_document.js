import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="vi" className="dark scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-background-dark text-white transition-colors duration-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
