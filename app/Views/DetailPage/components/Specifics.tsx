import { Grid } from '@mui/material';
import { ReactElement } from 'react';
import { formatPokemonText, returnColoredDivAsPerType, returnColoredDivAsPerWeakness } from '../../../Utils/Utils';

export default function Specifics ({detailData, gender, descriptionData, weaknessData}): ReactElement{

    return(
        <>
            <Grid className='specifics' container>
                <Grid item xs={6} sm={3}>
                <p className='label'>{'Height'}</p>
                <p className='data'>{detailData.height}</p>
                </Grid>
                <Grid item xs={6} sm={3}>
                <p className='label'>{'Weight'}</p>
                <p className='data'>{detailData.weight}</p>
                </Grid>
                <Grid item xs={6} sm={3}>
                <p className='label'>{'Gender'}</p>
                <p className='data'>{String(gender)}</p>
                </Grid>
                <Grid item xs={6} sm={3}>
                <p className='label'>{'Egg groups'}</p>
                <p className='data'>{String(descriptionData?.egg_groups?.map(i => formatPokemonText(i.name)))}</p>
                </Grid>
            </Grid>

            <Grid className='specifics' container>
                <Grid item xs={6} sm={3}>
                <p className='label'>{'Abilities'}</p>
                <p className='data'>{String(detailData?.abilities?.map(i => formatPokemonText(i.ability.name)))}</p>
                </Grid>
                <Grid item xs={6} sm={3}>
                <p className='label'>{'Types'}</p>
                <div className='colored-div' dangerouslySetInnerHTML={{__html: returnColoredDivAsPerType(detailData?.types)}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <p className='label'>{'Weak against'}</p>
                <div className='colored-div' dangerouslySetInnerHTML={{__html: returnColoredDivAsPerWeakness(weaknessData?.damage_relations?.double_damage_from)}}/>
                </Grid>
            </Grid>

        </>
                     
    )

}