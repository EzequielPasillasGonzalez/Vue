<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct Access: {{ $store.state.counter.count }}</h2> <!--? se accede al store y depues al state se obtiene el count -->
    <h2>Computed: {{ countComputed }}</h2>

    <hr>
    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

    <hr>
    <h1>MapState</h1>
    <h2>mapState {{ count }}</h2>
    <h2>lastMutation: {{ lastMutation }}</h2>

    <hr>
    <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    
    computed:{
        countComputed(){
            return this.$store.state.counter.count
        },
        // El counter que esta antes de las llaves sirve para especificar de que modulo se van a extraer 
        ...mapState( 'counter', { // Esta es la manera mas sencilla de mandar a llamar las propiedades del mapState
            count: state => state.count,
            lastMutation: 'lastMutation',
            isLoading: 'isLoading'
        }) 
    },

    methods:{
        increment(){
            this.$store.commit('counter/increment') //? Se manda a llamar tal cual sea el nombre de la mutation
        },
        incrementBy(){
            this.$store.commit('counter/incrementBy', 5) //? Se manda a llamar tal cual sea el nombre de la mutation
            //this.$store.commit('incrementBy', {name: 'Ezequiel', edad: 23}) //? Tambien se pueden mandar objetos
        },        

        //? Llamar actions
        // incrementRandomInt(){
        //     this.$store.dispatch('incrementRandomInt') //? Asi se llama una action            
        // }
        // El counter que esta antes de las llaves sirve para especificar de que modulo se van a extraer 
        ...mapActions( 'counter', { //? Una manera más simple de llamar la action
            incrementRandomInt: 'incrementRandomInt',                        
        },) 
    }
    

}
</script>