import { Grid } from '@mui/material';
import React, { ReactElement } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Pagination (props): ReactElement{
    const {data, pageNumber, goToNextPage, goToPrevPage} = props
    return(
        <Grid container className='pagination' alignItems={'center'} justifyContent='center' >
                 {data?.previous !== null && <ArrowBackIosNewIcon className='arrow' onClick={goToPrevPage}/>}
                  <p className='page-number'>{pageNumber}</p> 
                 {data?.next !== null && <ArrowForwardIosIcon className='arrow' onClick={goToNextPage}/>}
        </Grid>
    )

}