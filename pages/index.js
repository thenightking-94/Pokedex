import { QueryClient, dehydrate, useQuery } from "react-query"
import { getAllPokemons, QueryKeys } from "../app/React-query-middleware"
import dynamic from "next/dynamic";
const PokemonListing = dynamic(import('../app/Views/PokemonListing/PokemonListing'))


export default function Home({dehydratedState, pageNumber}) {
  const {queries : [ {state : { data, isFetching, error} } ] } = dehydratedState;
  const PokemonListingProps = {data, isFetching, error, pageNumber}
  return (
    <PokemonListing {...PokemonListingProps}/>
  )
}


export async function getServerSideProps({req,res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(QueryKeys.getAllPokemons, getAllPokemons)
  let pageNumber = 1
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      pageNumber,
    },
  }
}