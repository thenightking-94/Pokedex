import { PokemonApiUrl } from "../../Constants"
export async function getAllPokemons():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/pokemon`)
    const data = await res.json()
    return data
}

  
export async function getPokemonDetails(id:string):Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/pokemon/${id}`)
    const data = await res.json()
    return data
}


export async function getPokemonGenderMasterData():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/gender`)
    const data = await res.json()
    return data
}


export async function getPokemonDescription(id:string):Promise<Record<string, unknown>>{
    const res = await fetch(`${PokemonApiUrl}/pokemon-species/${id}`)
    const data = await res.json()
    return data
}


export async function getPokemonStrengthWeakness(id:string):Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/type/${id}`)
    const data = await res.json()
    return data
}


export async function getPokemonEvolutionChain(url:string):Promise<Record<string, unknown>> {
    const res = await fetch(`${url}`)
    const data = await res.json()
    return data
}


export async function getPageResults(pageNumber:number):Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/pokemon?offset=${(pageNumber-1)*20}&limit=20`)
    const data = await res.json()
    return data
} 


export async function getAllMalePokemons():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/gender/2/`)
    const data = await res.json()
    return data 
}


export async function getAllFemalePokemons():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/gender/1/`)
    const data = await res.json()
    return data
}


export async function getAllGenderlessPokemons():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/gender/3/`)
    const data = await res.json()
    return data
}


export async function getAllNormalPokemons():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/type/1/`)
    const data = await res.json()
    return data
}

export async function getAllFightingPokemons():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/type/2/`)
    const data = await res.json()
    return data
}


export async function getAllRockPokemons():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/type/6/`)
    const data = await res.json()
    return data
}


export async function getAllFlyingPokemons():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/type/3/`)
    const data = await res.json()
    return data
}


export async function getAllPoisonPokemons():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/type/4/`)
    const data = await res.json()
    return data
}


export async function getAllGroundPokemons():Promise<Record<string, unknown>> {
    const res = await fetch(`${PokemonApiUrl}/type/5/`)
    const data = await res.json()
    return data
}