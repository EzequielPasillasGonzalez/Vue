<template>
    <div>
        <h1>Buscar Pokemon: {{ pokemonId }} </h1>
    </div>

    <div>
        <form @submit.prevent="onSubmit">
            <input type="number" name="" id="pokemonId" placeholder="Id pokemon" autofocus v-model="pokemonId" ref="txtSearchId">
        </form>

        <br>
        <span>Presione enter para buscar</span>
    </div>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'  // Puedes usar 'useRouter' para navegar o acceder a las ruta



export default {
    setup() {

        const router = useRouter() //? Se accede a todo el objeto de navegacion

        const pokemonId = ref(1)
        const txtSearchId = ref()

        const onSubmit = () => {
            console.log('Pokemon a buscar: ', pokemonId.value);
            router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
        }

        onActivated(() => {
            txtSearchId.value.select() //? Para dejar seleccionado el texto
        })


        return {
            pokemonId,
            txtSearchId,

            onSubmit,
        }

    }
}
</script>

<style lang='scss' scoped></style>