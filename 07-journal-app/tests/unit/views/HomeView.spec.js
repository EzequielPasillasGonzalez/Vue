import { shallowMount } from "@vue/test-utils"

import HomeView from '@/views/HomeView.vue'

describe('Pruebas en el HomeView', () => {


    test('Debe de hacer match con el sanpshot', () => { 
        const wrapper = shallowMount(HomeView)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Al hacer click a un boton debe de redireccionar a no-entry', () => { 
        
        const mockrouter = {
            push: jest.fn() //? Simula una funcion push 
            //? Estas funciones simuladas permiten verificar si se llamaron 
            //? durante las pruebas, cuántas veces se llamaron, y con qué argumentos se llamaron.
        }
        
        const wrapper = shallowMount(HomeView, { 
            global: {
                mocks: {
                    $router: mockrouter
                }
            }
        })

        wrapper.find('button').trigger('click') //? Funcion de presionar

        expect(mockrouter.push).toHaveBeenCalled()
        expect(mockrouter.push).toHaveBeenCalledWith({ name:'no-entry' })
    })

})

