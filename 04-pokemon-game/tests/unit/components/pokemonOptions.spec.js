import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { mockPokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions componente", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: mockPokemons,
      },
    });
    console.log(wrapper.html());
  });

  test("Debe de hacer match con el snapshot", () => {

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Debe de mostrar las 4 opciones correctamente', () => { 
      // Que existan 4 li
      // Cada li debe de tener el nombre

      const liTags = wrapper.findAll('li')

      expect(liTags.length).toBe(mockPokemons.length); //? Muestra si existen
      
      for (let index = 0; index < mockPokemons.length; index++) {
        expect(liTags[index].text()).toBe(mockPokemons[index].name); //? Revisan que tengan su el nombre de los pokemon   
      }                        


  })

  test('Debe de emitir "selection" con sus respectivos parametros al hacer click', () => { 

      const liTags = wrapper.findAll('li')            
            
      for (let index = 0; index < liTags.length; index++) {        
          
          liTags[index].trigger('click') //? emite el even to click en todos los li          
        
          expect(wrapper.emitted('selection')[index]).toEqual([mockPokemons[index].id]) //? Se espera que los id que emiten coincidan
      }           

      expect(wrapper.emitted('selection').length).toBe(4) //? se espera que se emitieran 4 eventos      

  })
});
