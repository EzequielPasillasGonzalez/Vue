<template>
    <div>
        <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
        <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

        <template v-else>            
            <h3 >{{ pokemon.name }}</h3>
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
            <br>
            <router-link :to="{name: 'pokemon-search'}">Regresar</router-link>
        </template>
    </div>    
</template>

<script>
import { useRoute, onBeforeRouteLeave } from 'vue-router' // Puedes usar 'useRoute' para acceder a los datos de la ruta actual
import { watch } from 'vue'

import usePokemon from '@/composable/usePokemon'

export default {

    setup() {

        const route = useRoute()
        
        const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(route.params.id)

        // watch( //? Ejemplo
        //     () => route.params.id,
        //     (value, prevValue) => { 
        //         console.log(value, prevValue)
        //     }
        // )

        watch( // Sirve para observar los cambios en la ruta, cuando se hace un cambio manda el id a la funcion
            () => route.params.id,
            () => searchPokemon(route.params.id)            
        )

        onBeforeRouteLeave(() => { //? Para las accciones antes de que se salgan de la ruta
            const answer = window.confirm('¿Estas seguro que desea salir?')

            if(!answer){
                return false //Bloquea la salida
            }

        })

        return {
            pokemon, 
            isLoading, 
            errorMessage
        }
    }    



}
</script>

<style lang='scss' scoped></style>