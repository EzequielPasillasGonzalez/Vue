import {createRouter, createWebHashHistory}  from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

const routes = [
    {
        path     : '/',
        redirect : '/pokemon',
    },    
    {
        path: '/pokemon',
        name: 'pokemonLayout',
        component : () => import( /* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
        {   
            path      : 'home', 
            name      : 'pokemon-home',
            component : () => import( /* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPagePokemon.vue')
        }, //? Cargar de manera precezosa },
        {   
            path      : 'about',
            name      : 'pokemon-about',
            component : () => import( /* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPagePokemon.vue')
        }, //? Cargar de manera precezosa
        {   
            path      : 'pokemonid/:id',
            name      : `pokemon-id`, //? Se recomienda navegar por el name en las rutas
            component : () => import( /* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPagePokemon.vue'), //? Cargar de manera precezosa  },
            props     : (route) => {
                const id = Number(route.params.id)
                return isNaN(id) ? {id : 1} : { id } //? Pasarlo como una propertie del componente y poder usarlo alli                        
            }
        },
        {
            path: '', //? Si esta vacio el path, es el primer componente que se muestra al llegar a la ruta
            redirect: { name: 'pokemon-about' },
        }
        ]
    },
    {
        
        path: '/dbz',
        name: 'dbzLayout',
        beforeEnter: [ isAuthenticatedGuard ], // Se aplica un Gap solo para estas rutas
        component : () => import( /* webpackChunkName: "DBZ Layout" */ '@/modules/dbz/layouts/DragonBallLayout.vue'),
        children: [
            {
                //**Layout */
                path: 'dbz',
                name: 'dbz-characters',
                component : () => import( /* webpackChunkName: "DBZ Characters" */ '@/modules/dbz/pages/Characters.vue'),
            },
            {
                //**About */
                path: 'about',
                name: 'dbz-about',
                component : () => import( /* webpackChunkName: "DBZ About" */ '@/modules/dbz/pages/About.vue'),
            },
            {
                path: '', //? Si esta vacio el path, es el primer componente que se muestra al llegar a la ruta
                redirect: { name: 'dbz-characters' },
            }
        ]
    },    
    {   
        path      : '/:pathMatch(.*)*',
        name      : 'NotFound',
        component : () => import( /* webpackChunkName: "No Page Found" */ '@/modules/shared/pages/NoPageFound.vue')  //? Cargar de manera precezosa },        
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


// Guard Global - Sincrono
// router.beforeEach((to, from, next) => {
//     console.log({to, from, next});

//     const random = Math.random() * 100

//     if( random > 50){
//         console.log(`Autenticado`);
//         next()
//     }else{
//         console.log(random, 'Bloqueado por el beforeEach Guard');
//         next({name: 'pokemon-home'})
//     }

//     //next()
// })


//! Importante aplicar
// const canAccess = () => { // Protecciones para que no puedan pasar - Login probable uso
//     return new Promise( (resolve, reject) => {
//         const random = Math.random() * 100

//         if( random > 50){
//             console.log(`Autenticado - canAccess`);
//             resolve(true)
//         }else{
//             console.log(random, 'Bloqueado por el beforeEach Guard - canAccess');
//             reject()
//         }
//     })
// }

// router.beforeEach( async (to,from,next) => {
    

//     try {
//         const authorized = await canAccess()
//         next()
//     } catch (error) {
//         next({name: 'pokemon-home'})
//     }
// })

export default router;