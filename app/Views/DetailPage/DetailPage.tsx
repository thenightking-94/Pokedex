import { useMediaQuery, Grid } from '@mui/material';
import dynamic from 'next/dynamic';
import { MutableRefObject, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { getAllFemalePokemons, getAllGenderlessPokemons, getAllMalePokemons, getPokemonDescription, getPokemonEvolutionChain, getPokemonStrengthWeakness, QueryKeys } from '../../React-query-middleware';
import { getTheGenderOfPokemon } from '../../Utils/Utils';
const NavigationBtnMobile = dynamic(import('./components/NavigationBtnMobile'));
const Heading = dynamic(import('./components/Heading'));
const Specifics = dynamic(import('./components/Specifics'));
const Stats = dynamic(import("./components/Stats"))
const EvolutionBase = dynamic(import("./components/EvolutionBase"))

export default function DetailPage(props): ReactElement{
    const {id, detailData, color1, color2} = props
    const isMobile = useMediaQuery('(max-width:720px)')
    const textValue : MutableRefObject<string> = useRef('') as MutableRefObject<string>
    const [flText, setFlText] = useState<string>('')
    const [gender, setGender] = useState<Array<string>>([])
    const [readMore, setReadMore] = useState<boolean>(false)
    const {data: malePokemons} = useQuery(QueryKeys.getAllMalePokemons, getAllMalePokemons)
    const {data: femalePokemons} = useQuery(QueryKeys.getAllFemalePokemons, getAllFemalePokemons)
    const {data: genderlessPokemons} = useQuery(QueryKeys.getAllGenderlessPokemons, getAllGenderlessPokemons)
    const {data: descriptionData} = useQuery([QueryKeys.getPokemonDescription, id], ()=> getPokemonDescription((id)))
    const evolUrl = descriptionData?.evolution_chain?.url
    const {data: evolutionData} = useQuery([QueryKeys.getPokemonEvolutionChain, evolUrl], ()=> getPokemonEvolutionChain(evolUrl))
    const {data: weaknessData} = useQuery([QueryKeys.getPokemonStrengthWeakness, id], ()=> getPokemonStrengthWeakness(id))
    const {species: {name}} = detailData;
    const textTrimLimit = isMobile? 100 : 250

    useEffect(()=> {
        let text =''
        descriptionData?.flavor_text_entries?.forEach(element => {
            if(element.language.name == 'en')
                text+=element.flavor_text
        });
        textValue.current = text
        setFlText(text.substring(0,textTrimLimit))
        setReadMore(true)
    },[descriptionData])
    
    useEffect(()=> {
       setGender([...getTheGenderOfPokemon(genderlessPokemons, malePokemons, femalePokemons, name)])
    },[genderlessPokemons, malePokemons, femalePokemons, name])


    const toggleReadMore = () => {
        if(readMore){
            setReadMore(false)
            setFlText(textValue.current)
        }
        else{
            setReadMore(true)
            setFlText(textValue.current.substring(0,textTrimLimit))
        }
    }

    const HeadingProps = {
        detailData, color1, color2, name, id, flText, toggleReadMore, readMore
    }

    const SpecificsProps = {
        detailData, gender, descriptionData, weaknessData
    }

    const StatsProps = {
        detailData
    }

    const evolutionBaseProps = {
        evolutionData,
        name,
        id
    }

    return(
        <div className='desc-screen'>
            <Grid className='detail-modal-grid' container alignItems='center' justifyContent={'space-between'}>
                <Grid className='side-bars' item sm={3}/>
                <Grid item xs={12} sm={6}>
                   <div className='data-section' style={{padding:isMobile? '25px' : '40px'}}>

                       <Heading {...HeadingProps}/>

                       <Specifics {...SpecificsProps}/>

                       <Stats {...StatsProps}/>

                       <EvolutionBase {...evolutionBaseProps}/>

                       {!!isMobile && <NavigationBtnMobile id={id}/>}
                   </div>
                </Grid>
                <Grid className='side-bars' item sm={3}/>
            </Grid>
        </div>
    )

}