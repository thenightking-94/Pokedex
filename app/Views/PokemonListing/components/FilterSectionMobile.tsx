import { Backdrop, Grid, Modal } from '@mui/material'
import { ReactElement, useState } from 'react'
import CloseIcon from '../../Icons-svg/closeIcon'
import FilterIcon from '../../Icons-svg/filterIcon'
import ExpandIcon from '../../Icons-svg/expandIcon'
import { formatPokemonText } from '../../../Utils/Utils'

export default function FilterSectionMobile(props): ReactElement {
    const {
        handleChangeGenderMobile,
        handleChangeTypeMobile,
        PokemonTypes,
        PokemonGender,
        pokemonGenderDataFiltered,
        pokemonTypeDataFiltered,
    } = props
    console.log(pokemonGenderDataFiltered, pokemonTypeDataFiltered)
    const [toggleModal, setToggleModal] = useState(false)
    const [toggleTypeFilters, setToggleTypeFilters] = useState(false)
    const [toggleGenderFilters, setToggleGenderFilters] = useState(false)

    const toggleFilterModal = () => {
        !!toggleModal ? setToggleModal(false) : setToggleModal(true)
    }
    const openTypeFilters = () => {
        !!toggleTypeFilters
            ? setToggleTypeFilters(false)
            : setToggleTypeFilters(true)
    }
    const openGenderFilters = () => {
        !!toggleGenderFilters
            ? setToggleGenderFilters(false)
            : setToggleGenderFilters(true)
    }

    return (
        <div className="filter-section">
            <div onClick={toggleFilterModal} className="filterIcon">
                <FilterIcon />
            </div>
            {!!toggleModal && (
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={toggleModal}
                    onClose={toggleFilterModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <div className="filter-modal">
                        <div className="heading">
                            <p className="label">Filters</p>
                            <div
                                onClick={toggleFilterModal}
                                className="close-icon"
                            >
                                <CloseIcon />
                            </div>
                        </div>

                        <div className="type-filter">
                            <Grid
                                className="type-grid"
                                container
                                spacing={2}
                                alignItems="center"
                                justifyContent={'space-between'}
                            >
                                <Grid item sm={3} className="label">
                                    Type
                                </Grid>
                                <Grid item sm={6} className="labels">
                                    <p className="label-type">{'(Normal'}</p>
                                    <p className="bold-type">{' +5 More)'}</p>
                                </Grid>
                                <Grid
                                    onClick={openTypeFilters}
                                    item
                                    sm={3}
                                    className="expand-icon"
                                >
                                    {toggleTypeFilters ? (
                                        <CloseIcon />
                                    ) : (
                                        <ExpandIcon />
                                    )}
                                </Grid>
                            </Grid>
                            {!!toggleTypeFilters && (
                                <div className="checkbox-block">
                                    <Grid container spacing={2}>
                                        {PokemonTypes?.map((i, index) => {
                                            return (
                                                <Grid
                                                    className="checkbox-el"
                                                    key={index}
                                                    item
                                                    xs={6}
                                                >
                                                    {!pokemonTypeDataFiltered.includes(
                                                        i
                                                    ) ? (
                                                        <input
                                                            id={i}
                                                            onChange={(e) => {
                                                                handleChangeTypeMobile(
                                                                    e.target.id,
                                                                    'add'
                                                                )
                                                            }}
                                                            type="checkbox"
                                                            value={i}
                                                            name={i + 'gender'}
                                                        />
                                                    ) : (
                                                        <input
                                                            checked
                                                            id={i}
                                                            onChange={(e) => {
                                                                handleChangeTypeMobile(
                                                                    e.target.id,
                                                                    'remove'
                                                                )
                                                            }}
                                                            type="checkbox"
                                                            value={i}
                                                            name={i + 'gender'}
                                                        />
                                                    )}
                                                    <label
                                                        className="label-input"
                                                        htmlFor={i}
                                                    >
                                                        {formatPokemonText(i)}
                                                    </label>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </div>
                            )}
                        </div>
                        <div className="type-filter">
                            <Grid
                                className="gender-grid"
                                container
                                spacing={2}
                                alignItems="center"
                                justifyContent={'space-between'}
                            >
                                <Grid item sm={3} className="label">
                                    Gender
                                </Grid>
                                <Grid item sm={6} className="labels">
                                    <p className="label-gender">{'(Male'}</p>
                                    <p className="bold-gender">{' +2 More)'}</p>
                                </Grid>
                                <Grid
                                    onClick={openGenderFilters}
                                    item
                                    sm={3}
                                    className="expand-icon"
                                >
                                    {toggleGenderFilters ? (
                                        <CloseIcon />
                                    ) : (
                                        <ExpandIcon />
                                    )}
                                </Grid>
                            </Grid>
                            {!!toggleGenderFilters && (
                                <div className="checkbox-block">
                                    <Grid container spacing={2}>
                                        {PokemonGender?.map((i, index) => {
                                            return (
                                                <Grid
                                                    className="checkbox-el"
                                                    key={index}
                                                    item
                                                    xs={6}
                                                >
                                                    {!pokemonGenderDataFiltered.includes(
                                                        i
                                                    ) ? (
                                                        <input
                                                            id={i}
                                                            type="checkbox"
                                                            onChange={(e) => {
                                                                handleChangeGenderMobile(
                                                                    e.target.id,
                                                                    'add'
                                                                )
                                                            }}
                                                            value={i}
                                                            name={i + 'gender'}
                                                        />
                                                    ) : (
                                                        <input
                                                            id={i}
                                                            type="checkbox"
                                                            checked
                                                            onChange={(e) => {
                                                                handleChangeGenderMobile(
                                                                    e.target.id,
                                                                    'remove'
                                                                )
                                                            }}
                                                            value={i}
                                                            name={i + 'gender'}
                                                        />
                                                    )}
                                                    <label
                                                        className="label-input"
                                                        htmlFor={i}
                                                    >
                                                        {formatPokemonText(i)}
                                                    </label>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </div>
                            )}
                        </div>
                        <div className="type-filter">
                            <Grid
                                className="stats-grid"
                                container
                                spacing={2}
                                alignItems="center"
                                justifyContent={'space-between'}
                            >
                                <Grid item sm={3} className="label">
                                    Stats
                                </Grid>
                                <Grid item sm={6} className="labels">
                                    <p className="label-stats">{'(Normal'}</p>
                                    <p className="bold-stats">{' +2 More)'}</p>
                                </Grid>
                                <Grid item sm={3} className="expand-icon">
                                    <ExpandIcon />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}
