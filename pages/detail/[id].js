import { QueryClient, dehydrate } from "react-query"
import { getPokemonDetails, QueryKeys } from "../../app/React-query-middleware"
import dynamic from "next/dynamic";
import { getSuitableColorCodes } from "../../app/Utils/Utils";
const DetailPage = dynamic(import("../../app/Views/DetailPage/DetailPage"))


export default function Detail({dehydratedState, id}) {
  const [{state : { data, isFetching, error}}]  = dehydratedState?.queries;
  let pokemontype= data?.types?.map(i => i.type.name)
  const [color1, color2, ...rest] =  getSuitableColorCodes(pokemontype)
  const PokemondetailProps = { 
    id : id,
    detailData: data,
    color1,
    color2,
    }
  return (
    <DetailPage {...PokemondetailProps}/>
  )
}

export async function getServerSideProps(pageContext) {
  const {params: {id}} = pageContext
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([QueryKeys.getPokemonDetails, id], () => getPokemonDetails(id))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  }
}