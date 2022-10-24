import { ColorCodes } from "../Constants/ColorCodes";

export function getSuitableColorCodes(pokemonTypeDataFiltereds){
    let colors : Array<string> = [] as Array<string>
    if(!!pokemonTypeDataFiltereds && pokemonTypeDataFiltereds.length > 0){
        pokemonTypeDataFiltereds.forEach(element => {
            ColorCodes.forEach( i => {
                if(element === i.type)
                colors = [...colors, i.color]
            })
        });
    }
   
    return colors
}


export function formatPokemonId(id){
    if(Number(id) < 10)
        return String('00'+ id)
    else if (Number(id) >= 10 && Number(id) < 100)
        return String('0' + id)
    else if (Number(id) >= 100 && Number(id) <= 999)
        return String(id)
}




export function formatPokemonText(name){
    return name[0].toUpperCase().concat(name.substring(1,name.length))
}



export function checkAndReturnPokemonType (typeOfPokemons, type, storedFilterData, masterList){
    let ar : Array<{name : string, url: string}> = [] as Array<{name : string, url: string}>
    typeOfPokemons?.pokemon?.forEach(element => {
        masterList.forEach(i => {
            if(element.pokemon.name === i.name && storedFilterData.includes(type))
                ar = [...ar, i]
        })
    });
    return ar
}




export function checkAndReturnPokemonGender (genderDefinedPokemons, gender, storedFilterData, masterList){
    let ar : Array<{name : string, url: string}> = [] as Array<{name : string, url: string}>
    genderDefinedPokemons?.pokemon_species_details?.forEach(element => {
        masterList.forEach(i => {
            if(element.pokemon_species.name === i.name && storedFilterData.includes(gender))
                ar = [...ar, i]
        })
    });
    return ar
}



export function returnLinearGradientStyles (color1, color2){
    let style = {}
    if(!color2) 
        style = {backgroundColor: color1}
    else
        style = {backgroundImage: `linear-gradient(to bottom, ${color1}, ${color2})`}
    return style
}



export function getTheGenderOfPokemon (genderlessPokemons, malePokemons, femalePokemons, name){
    let genderString : Array<string> = [] as Array<string>
    malePokemons?.pokemon_species_details?.forEach(i => {
        if(i.pokemon_species.name === name)
        genderString=[...genderString,'male']
    })
    femalePokemons?.pokemon_species_details?.forEach(i => {
        if(i.pokemon_species.name === name)
        genderString=[...genderString,'female']
    })
    genderlessPokemons?.pokemon_species_details?.forEach(i => {
        if(i.pokemon_species.name === name)
        genderString=[...genderString,'genderless']
    })

    return genderString
}



export function returnColoredDivAsPerType (types){
    let getRelevantColors: Array<string> = [] as Array<string>
    !!types && types.forEach( i => {
        ColorCodes.forEach( j => {
            if(j.type === i.type.name)
                getRelevantColors = [...getRelevantColors, j.color]
        })
    })
    let str =''
    getRelevantColors?.map((item, index) => {
        str+= '<div class="mini-divs" style="background:'+item+'">'+formatPokemonText(types[index].type.name)+'</div>'
    })
    return str
}




export function returnColoredDivAsPerWeakness (weaknessArray){
    let getRelevantColors: Array<string> = [] as Array<string>
    !!weaknessArray && weaknessArray.forEach( i => {
        ColorCodes.forEach( j => {
            if(j.type === i.name)
                getRelevantColors = [...getRelevantColors, j.color]
        })
    })
    let str =''
    getRelevantColors?.map((item, index) => {
        str+= '<div class="mini-divs" style="background:'+item+'">'+formatPokemonText(weaknessArray[index].name)+'</div>'
    })
    return str
}




export function getEvolutionArray(evolutionData, ar : Array<{name: string, url: string}> = [] as Array<{name: string, url: string}>){
    if(!!evolutionData){
        if(evolutionData['evolves_to'].length === 0){
            ar = [...ar, { name : evolutionData['species'].name, url : evolutionData['species'].url}]
            return ar
        }
        else if (evolutionData['evolves_to'].length > 0){
            ar = [...ar, { name : evolutionData['species'].name, url : evolutionData['species'].url}]
            return getEvolutionArray(evolutionData['evolves_to'][0], ar)
        }
    }
    return 
}