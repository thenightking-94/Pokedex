import {  Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput } from '@mui/material';
import Select from '@mui/material/Select';
import React, { ReactElement } from 'react';
  

export default function FilterSectionDesktop (props): ReactElement{
    const {handleChangeGender, handleChangeType, pokemonGenderDataFiltered, pokemonTypeDataFiltered, PokemonTypes, PokemonGender} = props
   
    return(
        <div className='filter-section'>
            <Grid className='grid-offset' container spacing={2} alignItems='center' justifyContent={'space-between'}>
                <Grid item sm={4}>
                    <div className='type-section'>
                        <p className='label'>Type</p>
                        <FormControl className='type-checkbox'>
                            <InputLabel id="checkbox-label-type"><span className='desc'>{'Normal'}</span><span className='bold'>{' +5 More'}</span></InputLabel>
                            <Select
                            labelId="checkbox-label-type"
                            id="multiple-checkbox-type"
                            multiple
                            value= {pokemonTypeDataFiltered}
                            onChange= {handleChangeType}
                            input={<OutlinedInput label="Types" />}
                            renderValue={(selected) => selected.join(', ')}
                            >
                            {PokemonTypes?.map((i) => (
                                <MenuItem className='menu-item' key={i} value={i}>
                                    <Checkbox checked={pokemonTypeDataFiltered.indexOf(i) > -1} />
                                    <ListItemText primary={i} />
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
              
                <Grid item sm={4}>
                    <div className='gender-section'>
                        <p className='label'>Gender</p>
                        <FormControl className='gender-checkbox'>
                            <InputLabel id="checkbox-label-gender"><span className='desc'>{'Male'}</span><span className='bold'>{' +2 More'}</span></InputLabel>
                            <Select
                            labelId="checkbox-label-gender"
                            id="multiple-checkbox-gender"
                            multiple
                            value= {pokemonGenderDataFiltered}
                            onChange= {handleChangeGender}
                            input={<OutlinedInput label="Gender" />}
                            renderValue={(selected) => selected.join(', ')}
                            >
                            {PokemonGender?.map((i) => (
                                <MenuItem className='menu-item' key={i} value={i}>
                                <Checkbox checked={pokemonGenderDataFiltered.indexOf(i) > -1} />
                                <ListItemText primary={i} />
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
               
                <Grid item sm={4}>
                    <div className='stats-section'>
                        <p className='label'>Stats</p>
                        <FormControl className='stats-box'>
                            <InputLabel id="checkbox-label"><span className='desc'>{'HP'}</span><span className='bold'>{' +5 More'}</span></InputLabel>
                                <Select
                                labelId="checkbox-label"
                                id="multiple-checkbox"
                                multiple
                                value= {undefined}
                                onChange={undefined}
                                input={<OutlinedInput label="Stats" />}
                                >
                                </Select>
                        </FormControl>
                    </div>
                </Grid>
              
            </Grid>
        </div>
    )

}