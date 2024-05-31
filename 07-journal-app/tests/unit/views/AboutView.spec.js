import { shallowMount } from '@vue/test-utils'

import AboutView from "@/views/AboutView.vue";

describe('Pruebas de en el aboutView', () => {

    let wrapper
    
    beforeEach(() => {
        wrapper = shallowMount(AboutView)
    })
    
    test('Debe de renderizar el componente correctamente', () => { 
        expect(wrapper.html()).toMatchSnapshot()
    })


    

})