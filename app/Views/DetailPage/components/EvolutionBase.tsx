import dynamic from 'next/dynamic';
import React, { ReactElement, useEffect, useState } from 'react';
import { getEvolutionArray } from '../../../Utils/Utils';
import PointerIcon from '../../Icons-svg/pointerIcon';
const PokemonCards = dynamic(import('../../PokemonListing/components/PokemonCards')) ;

export default function EvolutionBase ({ evolutionData}): ReactElement{

       const [evolutionArray, setEvolutionArray] = useState<Array<{name: string, url: string}>>([])

       useEffect(() => {
        if(!!evolutionData && !!evolutionData.chain){
            let evolutionSeries  = getEvolutionArray(evolutionData?.chain, []) 
            setEvolutionArray(evolutionSeries)
        }
       },[evolutionData])


    return(
        <>
        <div className='title'>{'Evolution chain'}</div>
        <div className='pokemon-cards-detail'>
            {
               !!evolutionArray &&  evolutionArray?.length > 0 && [...new Set(evolutionArray)].map((item, index) => {
                    const propsForEach = {item, inDetailPage: true}
                    return (
                        <>
                            <PokemonCards {...propsForEach}/>
                            {!(index === evolutionArray.length-1) &&
                                <div className='pointer'>
                                    <PointerIcon/>
                                </div>
                            }
                        </>
                        
                    )
                })
            }
        </div>
            
        </>
    )

}