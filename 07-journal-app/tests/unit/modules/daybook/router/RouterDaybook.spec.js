import { shallowMount } from "@vue/test-utils"

import router from "@/modules/daybook/router"

describe('Pruebas en Router del Daybook', () => {


    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(router)
    })

    test('El router debe de tener esta configuracion', async () => {

        expect(router).toMatchObject({
            name: 'dayBook',
            component: expect.any( Function ),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any( Function ),
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any( Function ),
                    props: expect.any( Function )                    
                },
            ]
        })

        // expect(  (await router.children[0].component()).default.name ).toBe('NoEntrySelected')
        // expect(  (await router.children[1].component()).default.name ).toBe('EntryView')

        const promiseRoutes = []

        router.children.forEach( child => promiseRoutes.push(child.component()) )

        const routes = (await Promise.all( promiseRoutes )).map( r => r.default.name)
        


    })


    test('Debe de retornar el Id de la ruta', () => {

        const route = {
            params: {
                id: 'ABC-132'
            }
        }

        // expect(router.children[1].props(route)).toEqual({id: 'ABC-132'});

        const entryRoute = router.children.find( route =>  route.name === 'entry')

        expect(entryRoute.props(route)).toEqual({id: 'ABC-132'});


    })

})