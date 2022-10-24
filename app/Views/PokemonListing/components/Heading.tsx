import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

export default function Heading (){
const router = useRouter()
const isMobile = useMediaQuery('(max-width:720px)')
    return(
        <div onClick={() => { router.push('/') }} className={isMobile? 'heading-mobile' : 'heading'}>
            <div title='Click here to go to homepage' className='label'>Pokédex</div>
            <div className='small-label'>Search for any Pokémon that exists on the planet</div>
        </div>
    )

}