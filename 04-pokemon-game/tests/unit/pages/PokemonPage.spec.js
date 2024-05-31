import { shallowMount } from '@vue/test-utils'
import PokemonPage from "@/pages/PokemonPage.vue";
import { mockPokemons } from '../mocks/pokemons.mock';

describe('PokemonPage Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })
    
    test('Debe de hacer match con el snapshot', () => { 

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Deeb de llamar el mixPokemonArray al montar', () => { 
        
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' ) //? Revisa los metodos u otra cosa
        wrapper = shallowMount(PokemonPage) //? Se debe ahcer asi cuando se quiere verificar algo en el mounted

        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('Debe de hacer match con el snaptshot cuando cargan los pokemons', () => { 
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const pokemonPicture = wrapper.find('pokemon-picture-stub')
        const PokemonOptions = wrapper.find('pokemon-options-stub')

        //? PokemonPicture debe de existir
        expect(pokemonPicture).toBeTruthy()
        
        
        //? PokemonOptions debe de existir
        expect(PokemonOptions).toBeTruthy()

        //? Pokemon Picture attribute pokemonId === del arreglo en la posicion 0
        expect(pokemonPicture.attributes('pokemonid')).toEqual(mockPokemons[0].id.toString())

        //? PokemonOptions attribute pokemons toBe true
        expect(PokemonOptions.attributes('pokemons')).toBeTruthy()


    });

    test('Pruebas con checkAnswer', async () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(0)
        
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`False, ${mockPokemons[0].name}`)
        
        
        
    })

});