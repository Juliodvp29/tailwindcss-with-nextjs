import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <section className='bg-blue-400 min-h-screen grid place-content-center'>
      <Component {...pageProps} />
    </section>
  )
}

export default MyApp
