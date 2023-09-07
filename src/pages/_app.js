import '@/styles/globals.css'
import Head from 'next/head'
 
export function Home() {
  return (
    <div>
      <Head>
        <title>Pantheon 2023 | BIT MESRA</title>
      </Head>
    </div>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Home />
      <Component {...pageProps} />
    </>
  );
  
  
}
