//? Debe de llamarse de la misma manera de lo que estamos probando para llevar un control
import pokemonApi from '@/api/pokemonsApi'


describe('pokemonApi', () => {
    test('Axios debe de estar configurado con el api de pokemon', () => {
        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
})