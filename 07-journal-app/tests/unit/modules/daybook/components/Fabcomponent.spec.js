import { shallowMount } from "@vue/test-utils";

import FaBComponent from "@/modules/daybook/components/FaBComponent.vue";
describe('Pruebas en el FAB Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(FaBComponent)
    })


    test('Debe de mostrar el icono por defecto', () => {



        const icon = wrapper.find('i')
        expect(icon.classes()).toContain('fa-plus')
        // expect(icon.classes('fa-plus')).toBeTruthy()

    })

    test('Debe de mostrar el icono por argumento: fa-circle', async () => {


        const wrapper = shallowMount(FaBComponent, {
            props: {                
                    icon: 'fa-circle'                
            }
        })


        const icon = wrapper.find('i')

        expect(icon.classes()).toContain('fa-circle')
    })

    test('Debe de emitir el evento on:click cuando se hace click', async () => {        

        // Simula el evento de click
        await wrapper.trigger('click')

        // Verifica que se emitió el evento 'on:click'
        expect(wrapper.emitted('on:click')).toBeTruthy()

    })

})