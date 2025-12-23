import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

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
      
      {/* Page Loading Bar */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-400 z-[9999] animate-pulse">
          <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent animate-loading-bar"></div>
        </div>
      )}
      
      {/* Page Transition Wrapper */}
      <div className={`transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
