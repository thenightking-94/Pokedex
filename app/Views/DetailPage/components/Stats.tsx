import { Grid } from '@mui/material';
import React, { ReactElement } from 'react';
import { stats } from '../../../Constants';

export default function Stats ({detailData}): ReactElement{
    return(
        <div className='stats'>
            <div className='title'>
                {'Stats'}
            </div>
            <Grid className='stats-grid' container spacing={2}>
                {detailData?.stats?.map((item, index) => {
                    return (
                        <Grid container key={index} xs={12} item sm={6}>
                            <Grid item xs={3} sm={3} className='label'>{stats[index]}</Grid>
                            <Grid item xs={9} sm={9} className='label-seek'>
                                <div style={{width:`${item.base_stat > 100? 100 : item.base_stat}%`}} className='filler'>{item.base_stat}</div>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
     </div>

    )

}