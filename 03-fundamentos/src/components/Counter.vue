<template>
<div>


        <!-- <h2> {{ titulo || 'Counter' }} </h2> --> <!-- ? Aqui se le asigna el valor de 'Counter' si viene vacio el tituloS -->

    
    <h2  > {{ customTitle }}</h2>    

    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}  </p>

    <div class="button">        
        <button @click="decrease">-1</button>
        <button @click="increase">+1</button>
    </div>


</div>
</template>

<script>
export default {

    // La diferencia de los atributos y las porpertis es que las properti ya estan previamente definidas 
    //props:['titulo', 'start'], // Asi se reciben las propertis
    props:{ // Las propiedades que acepta el componente
        titulo: String,
        start: {

            type: Number,
            
            //require: true // Hacer que la properti sea obligatoria
            
            default: 100, // POner un valor por defecto

            validator(value){ // Hacer validaciones del valor que se recibe
                return value >= 0
            }
        }
    },  

    data(){
        return {
            counter: this.start
        } 
    },

    methods: {
        
        getSquareValue(){            
            return this.counter // Hace referencia al valor que tiene en la data
        },

        increase(){            
            this.counter ++            
        },

        decrease(){            
            this.counter --            
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