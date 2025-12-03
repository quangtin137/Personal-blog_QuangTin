import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quang Tín - Portfolio & Blog | Network Programming</title>
        <meta name="description" content="Portfolio của Quang Tín - Sinh viên Lập Trình Mạng. Chuyên về Java, JavaScript, Socket Programming và Web Development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Quang Tín, portfolio, lập trình mạng, Java, JavaScript, Next.js, Socket Programming" />
        <meta name="author" content="Quang Tín" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
