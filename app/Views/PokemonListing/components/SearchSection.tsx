import { useMediaQuery } from '@mui/material';
import React, { LegacyRef, ReactElement, useRef } from 'react';
import SearchIcon from '../../Icons-svg/searchIcon';

export default function SearchSection (props): ReactElement{
const inputField : LegacyRef<HTMLInputElement> = useRef(null) as LegacyRef<HTMLInputElement>
const isMobile = useMediaQuery('(max-width:720px)')
const { performSearch } = props
    return(
        <div className='search-section'>
            {!isMobile && <div className='label'>Search by</div>}
            <div className='search-box'>
            <input ref={inputField} className='search-box-input' onChange={(e) => {performSearch(e.target.value)}} placeholder='Name or Number'/>
            <div className='icon-search' onClick={() => {performSearch(inputField.current.value)}}>
              <SearchIcon/>
            </div>
            </div>
        </div>
    )
}