<template>
    <div>
        <h1>Counter Vue</h1>
        <h2>{{ counter }}</h2>

        <button @click="increase">+1</button>
        
        <button @click="decrease">-1</button>
    </div>
</template>

<script>
import useCounter from '@/composable/useCounter'

export default {
    name: 'Counter',
    props: {},
    emits: [],
    setup() {
        // const counter = ref(1) //? Es para hacer referencia a esta variable, los parentesis son para darle el valor inicial


        // // const increase = () => { //? Se define una funcion
        // //     counter.value += 1 //? El value es para obtener el valor
        // // }

        // const decrease = () => { //? Se define una funcion
        //     counter.value -= 1 //? El value es para obtener el valor
        // }

        // return { //? Se retorna todo lo que queremos que sea visible en el template
        //     // Objetos
        //     counter,

        //     // Metodos
        //     increase: () => counter.value++, //? Forma corta de hacer las funciones
        //     decrease,
        // }


        const { counter, increase, decrease } = useCounter(25) // Se manda como parametro

        return {
            // Objetos
            counter,

            //Metodos
            increase,
            decrease,
        }

    }
}
</script>

<style lang='scss' scoped>

</style>