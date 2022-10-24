import { QueryClient, dehydrate } from "react-query"
import { getPageResults, QueryKeys } from "../../app/React-query-middleware"
import dynamic from "next/dynamic";
const PokemonListing = dynamic(import("../../app/Views/PokemonListing/PokemonListing"))


export default function Page({dehydratedState, pageNumber}) {
  const {queries : [ {state : { data, isFetching, error} } ] } = dehydratedState;
  const PokemonListingProps = {data, isFetching, error, pageNumber}
  return (
    <PokemonListing {...PokemonListingProps}/>
  )
}

export async function getServerSideProps(pageContext) {
  const {params: {pageNumber}} = pageContext
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([QueryKeys.getPageResults, pageNumber], () => getPageResults(Number(pageNumber)))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      pageNumber
    },
  }
}