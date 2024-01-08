<template>

    <!-- <h2> {{ titulo || 'Counter' }} </h2> --> <!-- ? Aqui se le asigna el valor de 'Counter' si viene vacio el tituloS -->

    
    <h2  > {{ customTitle }} </h2>

    <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}  </p>

    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}  </p>

    <div>
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>


</template>

<script>
export default {

    props:['titulo'], // Asi se reciben las propertis

    data(){
        return {
            counter: 5
        } 
    },

    methods: {
        
        getSquareValue(){            
            return this.counter // Hace referencia al valor que tiene en la data
        },

        increase(){            
            this.counter += 1            
        },

        decrease(){            
            this.counter -= 1            
        }
    },
    computed:{
        squareCounter(){ // Es mas practico por si se necesita realizar el mismo proceso muchas veces            
            return this.counter * this.counter
        },

        customTitle(){
            if(this.titulo === undefined){
                return 'Counter'
            }
            
            return this.titulo
            
        }
    }

}
</script>

<style>

    button {
        background-color:  #64BB87;
        border-radius:  5px;
        border: 1px solid white;
        color: white;
        margin: 0 5px;
        padding: 5 px 15px;
        transition:  0.3s ease-in-out;
    }

    button:hover{
        background-color:  #5aa67b;
        transition: 0.3s ease-in-out;
    }

    #titulo{
        font-weight: bold;
    }

</style>