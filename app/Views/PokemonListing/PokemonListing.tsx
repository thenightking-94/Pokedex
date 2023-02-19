import { Grid, useMediaQuery } from '@mui/material'
import { ReactElement, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { SelectChangeEvent } from '@mui/material/Select'
import { PokemonGender, PokemonTypes } from '../../Constants'
import { useQuery } from 'react-query'
import {
    getAllFemalePokemons,
    getAllFightingPokemons,
    getAllFlyingPokemons,
    getAllGenderlessPokemons,
    getAllGroundPokemons,
    getAllMalePokemons,
    getAllNormalPokemons,
    getAllPoisonPokemons,
    getAllRockPokemons,
    QueryKeys,
} from '../../React-query-middleware'
import {
    checkAndReturnPokemonGender,
    checkAndReturnPokemonType,
} from '../../Utils/Utils'
const Heading = dynamic(import('./components/Heading'))
const SearchSection = dynamic(import('./components/SearchSection'))
const FilterSectionDesktop = dynamic(
    import('./components/FilterSectionDesktop')
)
const PokemonCards = dynamic(import('./components/PokemonCards'))
const FilterSectionMobile = dynamic(import('./components/FilterSectionMobile'))
const Pagination = dynamic(import('./components/Pagination'))

export default function PokemonListing(props): ReactElement {
    const router = useRouter()
    const isMobile = useMediaQuery('(max-width:720px)')
    const { data, isFetching, error, pageNumber } = props
    const [list, setList] = useState<Array<{ name: string; url: string }>>([])
    const [pokemonTypeDataFiltered, setPokemonType] = useState<Array<string>>(
        []
    )
    const [pokemonGenderDataFiltered, setPokemonGender] = useState<
        Array<string>
    >([])
    const { data: malePokemons } = useQuery(
        QueryKeys.getAllMalePokemons,
        getAllMalePokemons
    )
    const { data: femalePokemons } = useQuery(
        QueryKeys.getAllFemalePokemons,
        getAllFemalePokemons
    )
    const { data: genderlessPokemons } = useQuery(
        QueryKeys.getAllGenderlessPokemons,
        getAllGenderlessPokemons
    )
    const { data: normalPokemons } = useQuery(
        QueryKeys.getAllNormalPokemons,
        getAllNormalPokemons
    )
    const { data: fightingPokemons } = useQuery(
        QueryKeys.getAllFightingPokemons,
        getAllFightingPokemons
    )
    const { data: rockPokemons } = useQuery(
        QueryKeys.getAllRockPokemons,
        getAllRockPokemons
    )
    const { data: flyingPokemons } = useQuery(
        QueryKeys.getAllFlyingPokemons,
        getAllFlyingPokemons
    )
    const { data: poisonPokemons } = useQuery(
        QueryKeys.getAllPoisonPokemons,
        getAllPoisonPokemons
    )
    const { data: groundPokemons } = useQuery(
        QueryKeys.getAllGroundPokemons,
        getAllGroundPokemons
    )

    useEffect(() => {
        let { data } = props
        setList(data?.results)
    }, [props])

    const handleChangeType = (childData) => {
        setPokemonType(childData)
    }

    const handleChangeGender = (childData) => {
        setPokemonGender(childData)
    }

    const handleChangeGenderMobile = (IdValue, typeOfOperation) => {
        if (typeOfOperation === 'add')
            setPokemonGender([...pokemonGenderDataFiltered, IdValue])
        else {
            let temp = [...pokemonGenderDataFiltered]
            temp = temp.filter((a) => a !== IdValue)
            setPokemonGender(temp)
        }
    }

    const handleChangeTypeMobile = (IdValue, typeOfOperation) => {
        if (typeOfOperation === 'add')
            setPokemonType([...pokemonTypeDataFiltered, IdValue])
        else {
            let temp = [...pokemonTypeDataFiltered]
            temp = temp.filter((a) => a !== IdValue)
            setPokemonType(temp)
        }
    }

    
    const performSearch = (val: string) => {
        let currentList: Array<{ name: string; url: string }> = [
            ...list,
        ] as unknown as Array<{ name: string; url: string }>
        let searchResults: Array<{ name: string; url: string }> =
            [] as unknown as Array<{ name: string; url: string }>
        if (val.length > 0) {
            let flag: boolean = false as boolean
            for (let i = 0; i < currentList.length; i++) {
                if (
                    currentList[i].name.includes(val) ||
                    String(currentList[i].url.split('/')[6]).includes(val)
                ) {
                    searchResults = [...searchResults, currentList[i]]
                    flag = true
                }
            }
            if (flag) setList(searchResults)
            else setList([])
        } else setList(data?.results)
    }



    const goToNextPage = () => {
        router.push(`/page/${Number(pageNumber) + 1}`)
    }

    const goToPrevPage = () => {
        router.push(`/page/${Number(pageNumber) - 1}`)
    }

    useEffect(() => {
        let ar: Array<{ name: string; url: string }> = [] as Array<{
            name: string
            url: string
        }>
        if (pokemonGenderDataFiltered.length > 0) {
            ar = [
                ...ar,
                ...checkAndReturnPokemonGender(
                    malePokemons,
                    'male',
                    pokemonGenderDataFiltered,
                    data?.results
                ),
            ]
            ar = [
                ...ar,
                ...checkAndReturnPokemonGender(
                    femalePokemons,
                    'female',
                    pokemonGenderDataFiltered,
                    data?.results
                ),
            ]
            ar = [
                ...ar,
                ...checkAndReturnPokemonGender(
                    genderlessPokemons,
                    'genderless',
                    pokemonGenderDataFiltered,
                    data?.results
                ),
            ]
            setList([...new Set(ar)])
        } else setList(data?.results)
    }, [pokemonGenderDataFiltered])

    useEffect(() => {
        let ar: Array<{ name: string; url: string }> = [] as Array<{
            name: string
            url: string
        }>
        if (pokemonTypeDataFiltered.length > 0) {
            ar = [
                ...ar,
                ...checkAndReturnPokemonType(
                    normalPokemons,
                    'normal',
                    pokemonTypeDataFiltered,
                    data?.results
                ),
            ]
            ar = [
                ...ar,
                ...checkAndReturnPokemonType(
                    flyingPokemons,
                    'flying',
                    pokemonTypeDataFiltered,
                    data?.results
                ),
            ]
            ar = [
                ...ar,
                ...checkAndReturnPokemonType(
                    groundPokemons,
                    'ground',
                    pokemonTypeDataFiltered,
                    data?.results
                ),
            ]
            ar = [
                ...ar,
                ...checkAndReturnPokemonType(
                    poisonPokemons,
                    'poison',
                    pokemonTypeDataFiltered,
                    data?.results
                ),
            ]
            ar = [
                ...ar,
                ...checkAndReturnPokemonType(
                    fightingPokemons,
                    'fighting',
                    pokemonTypeDataFiltered,
                    data?.results
                ),
            ]
            ar = [
                ...ar,
                ...checkAndReturnPokemonType(
                    rockPokemons,
                    'rock',
                    pokemonTypeDataFiltered,
                    data?.results
                ),
            ]
            setList([...new Set(ar)])
        } else setList(data?.results)
    }, [pokemonTypeDataFiltered])

    const searchSectionProps = {
        performSearch,
    }

    const paginationProps = {
        data,
        pageNumber,
        goToNextPage,
        goToPrevPage,
    }

    const filterPropsDesktop = {
        handleChangeGender,
        handleChangeType,
        pokemonGenderDataFiltered,
        pokemonTypeDataFiltered,
        PokemonTypes,
        PokemonGender,
    }

    const filterPropsMobile = {
        handleChangeGenderMobile,
        handleChangeTypeMobile,
        PokemonTypes,
        PokemonGender,
        pokemonGenderDataFiltered,
        pokemonTypeDataFiltered,
    }

    return (
        <div className={isMobile ? 'container-mobile' : 'container'}>
            <Heading />
            <div className="search-filter">
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={9}>
                        <SearchSection {...searchSectionProps} />
                    </Grid>
                    <Grid item sm={6} xs={3}>
                        {isMobile ? (
                            <FilterSectionMobile {...filterPropsMobile} />
                        ) : (
                            <FilterSectionDesktop {...filterPropsDesktop} />
                        )}
                    </Grid>
                </Grid>
            </div>
            <div className="pokemon-list">
                <Grid container spacing={2}>
                    {list?.map(
                        (
                            item: { name: string; url: string },
                            index: number
                        ) => {
                            const pokemoncardProps = { item }
                            return (
                                <Grid key={index} item xs={6} md={2}>
                                    <PokemonCards {...pokemoncardProps} />
                                </Grid>
                            )
                        }
                    )}
                </Grid>

                {!(list?.length > 0) && (
                    <Grid
                        container
                        alignItems={'center'}
                        justifyContent="center"
                        className="no-results"
                    >
                        {'Sorry! No results on this Page'}
                    </Grid>
                )}
            </div>
            <Pagination {...paginationProps} />
        </div>
    )
}
