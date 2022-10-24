import { Grid, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { Bars, ThreeCircles } from 'react-loader-spinner';
import { returnLinearGradientStyles, formatPokemonId } from '../../../Utils/Utils';
import BackIcon from '../../Icons-svg/backIcon';
import CloseIcon from '../../Icons-svg/closeIcon';
import ForwardIcon from '../../Icons-svg/forwardIcon';

export default function Heading ({detailData, color1, color2, name, id, flText, toggleReadMore, readMore}): ReactElement{
    const router = useRouter()
    const isMobile = useMediaQuery('(max-width:720px)')

    return(
        <>
            {isMobile ?
                <div className='mobile-heading'>
                    <div className='title-id'>
                         <div className='title'>
                            {name.toUpperCase()}
                         </div>
                         <div className='id'>
                             {formatPokemonId(id)}
                         </div>
                    </div>
                    <div onClick={()=>{ router.push('/') }} className='close-icon'><CloseIcon/></div>
                </div> : null
            }
            <Grid container>
                    <Grid item xs={6} sm={4}>
                        <div className={isMobile? 'image-card-mobile' : 'image-card'} style={returnLinearGradientStyles(color1,color2)}>
                            {!detailData && <Bars height="60" width="60" color="grey" ariaLabel="bars-loading" visible={true} />}
                            {!!detailData && <img alt={name} aria-labelledby={name} src={detailData?.sprites?.other?.dream_world?.front_default} className='det-img'/>}
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={8}>
                        {!isMobile && 
                            <div className='heading-nav'>
                                <div className='pokemon-name'>{name.toUpperCase()}</div>
                                <div className='pokemon-id'>{formatPokemonId(id)}</div>
                                <div className='nav'>
                                    <div onClick={()=>{router.push(`/detail/${Number(id)-1}`)}} className='back-icon'><BackIcon/></div>
                                    <div onClick={()=>{ router.push('/') }} className='close-icon'><CloseIcon/></div>
                                    <div onClick={()=>{router.push(`/detail/${Number(id)+1}`)}} className='forward-icon'><ForwardIcon/></div>
                                </div>
                            </div>}
                        {flText? 
                                <div className={isMobile? 'text-section-mobile' :'text-section'}>
                                    {flText} {!!readMore && <span onClick={toggleReadMore} className='read-more'><u>{'  read more'}</u></span>}
                                    {!readMore && <span onClick={toggleReadMore} className='read-more'><u>{'  read less'}</u></span>}
                                 </div>
                                 :
                                 <div className='loader'>
                                    <ThreeCircles
                                        height="70"
                                        width="70"
                                        color="#4fa94d"
                                        visible={true}
                                        ariaLabel="three-circles-rotating"
                                        outerCircleColor="#2E3156"
                                        innerCircleColor="#CFB7ED"
                                        middleCircleColor="#F4D1A6"
                                        />
                                 </div>
                        }
                    </Grid>
             </Grid>
        </>
       
    )

}