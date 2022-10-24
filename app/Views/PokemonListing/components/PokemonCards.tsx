import React, { ReactElement, useState} from 'react';
import { useQuery } from 'react-query';
import { getPokemonDetails, QueryKeys } from '../../../React-query-middleware';
import { Bars } from 'react-loader-spinner'
import { getSuitableColorCodes, formatPokemonId, formatPokemonText, returnLinearGradientStyles } from '../../../Utils/Utils';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';

export default function PokemonCards (props): ReactElement{
    const {item : { name, url}, inDetailPage} = props;
    const isMobile = useMediaQuery('(max-width:720px)')
    const PokemonId : string = (url.trim().split('/'))[6] as string
    const router = useRouter()
    const {data, isLoading, error} = useQuery([QueryKeys.getPokemonDetails, PokemonId], () => getPokemonDetails(PokemonId))
    let imgUrl :string = data?.sprites?.other?.dream_world?.front_default as string
    let pokemontype : Array<string> = data?.types?.map(i => i.type.name) as Array<string>
    const [color1, color2, ...rest] =  getSuitableColorCodes(pokemontype)
    
   const goToDetailPage = () =>{
    router.push(`/detail/${PokemonId}`)
   }

    return(
        <>
            <div onClick={goToDetailPage} className={(isMobile && inDetailPage) ? 'minified-card' : 'pokemon-card'}>
                {isLoading && <Bars height="60" width="60" color="grey" ariaLabel="bars-loading" visible={true} /> }
                {
                    !!data && 
                    <div className='pokemon-data' style={returnLinearGradientStyles(color1, color2)}>
                         <img alt={name} aria-labelledby={name} src={imgUrl} className='list-img'/>
                         <p className='label'>{formatPokemonText(name)}</p>
                         <p className='id-label'>{formatPokemonId(PokemonId)}</p>
                    </div>
                }
            </div>
        </>    
    )

}