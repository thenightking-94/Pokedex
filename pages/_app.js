import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import '../styles/app.scss'
import '../styles/Pokemonlisting.scss'
import '../styles/Pokemoncards.scss'
import '../styles/Filtersection.scss'
import '../styles/Descriptionscreen.scss'

export default function MyApp({ Component, pageProps }) {
  const lang = "en";
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime:5000,
        cacheTime:10
      }
    }
  }))
  useEffect(() => {
    document.documentElement.lang = lang;
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>Pokédex</title>
          <meta name="description" content="Pokédex app in Nextjs" />
        </Head>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}