<template>
    <h1>
        About
    </h1>
    <hr>
    <h2>{{ name }}</h2>
    <button @click="onChangeName">Cambiar nomber</button>
</template>

<script>

    export default {      
        
        data(){
            return {
                name: 'Ezequiel'
            }            
        },
        methods:{
            onChangeName(){
                console.log('Se cambiara el nombre a Arely');
                this.name = 'Arely'
            }            
        },
        beforeCreate() {
            
            console.log('beforeCreate');
        },
        created() {
            this.name = 'Juan'
            console.log('created');
            // Aqui se peuden hacer las peticiones http
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
        },
        beforeUpdate() {
            console.log('beforeUpdate');
        },
        updated() {
            console.log('updated');
        },
        activated() {
            console.log('activated');
        },
        deactivated() {
            console.log('deactivated');
        },
        unmounted() {
            console.log('unmounted');
        },
        errorCaptured() {
            console.log('errorCaptured');
        },
        renderTracked() {
            console.log('renderTracked');
        },
        renderTriggered() {
            console.log('renderTriggered');
        },
    }

</script>