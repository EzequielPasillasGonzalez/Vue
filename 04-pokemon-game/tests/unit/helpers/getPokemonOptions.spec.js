import getPokemonOptions, { getPokemons, getPokemoNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
    test('Debe de regresar un arreglo de numeros', () =>{
        
        const pokemons = getPokemons() //? Se ejecuta la funcion

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })

    test('getPokemonNames debe de retornar un arreglo de 4 elementos con nombres de pokemons', async () => {
        const pokemons = await getPokemoNames([1,2,3,4])

        expect(pokemons[0].name).toBe('bulbasaur')
        expect(pokemons[1].name).toBe('ivysaur')
        expect(pokemons[2].name).toBe('venusaur')
        expect(pokemons[3].name).toBe('charmander')
    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', async () => {
        const pokemons = await getPokemonOptions()        

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                "id": expect.any(Number), 
                "name": expect.any(String) //? Espera cualquier string
            }, 
            {
                "id": expect.any(Number), 
                "name": expect.any(String) 
            }, 
            {
                "id": expect.any(Number), 
                "name": expect.any(String) 
            }, 
            {
                "id": expect.any(Number), 
                "name": expect.any(String) 
            }
        ])
    })
})