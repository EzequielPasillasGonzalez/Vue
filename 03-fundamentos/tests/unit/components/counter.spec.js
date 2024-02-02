import { mount, shallowMount} from '@vue/test-utils' //? el Mount monta todos los componentes y subcomponentes y el shallowmont monta un componente 
import Counter  from "@/components/Counter"; //? Se trae al componente para ser evaluado

describe('Counter Component', () => {  //? Es el nombre que se le da a la prueba

    //? Hacer una revision por si se cambio algo en el codigo
    // test('Debe de hacer match con el snapshot', () =>{

    //     const wrapper = shallowMount(Counter) //? Es el metodo con el que se montan los componentes

    //     expect(wrapper.html()).toMatchSnapshot() //? se evalua oara ver si no se ha cambiado el html del componente

    // })    

    test('H2 debe de tener algun valor por defecto "Counter"', () => { 
        
        const wrapper = shallowMount(Counter) //? Es el metodo con el que se montan los componentes

        expect(wrapper.find('h2').exists()).toBeTruthy() //? Puede regresar un true o false

        const h2Value = wrapper.find('h2').text() //? El find solo busca el primero que encuentre y el findAll() busca todos
        //? El .text() lo convierte en texto

        expect(h2Value).toBe('Counter') //? Es un valor esperado


        
    })

    test('El valor por defecto debe de ser 100 en el p', () => {
        //Wrapper
        const wrapper = shallowMount(Counter) //? Se asigna el componente a revisar

        // pTags
        const value = wrapper.find('[data-testid="counter"]').text() //? Busca en especifico un id para hacer su prueba, en caso que haya muchas etiquetas iguales


        //expect segundo p = 100         
        expect(value).toBe("100") //? Del segundo p, se espera un valor "100"
    });


})