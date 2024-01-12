<template>
    <div>
      <img v-if="img" :src="img">
  
      <div class="bg-dark"></div>
  
      <div class="indecision-container">
       
        <input
            type="text"
            placeholder="Hazme una pregunta"
            v-model="question">
        
        <p>Recuerda terminar con un signo de interrogacion (?)</p>
        
        <div v-if="isValidquestion">
            <h2>{{ question }}</h2>
            <h1>{{answer}}</h1>
        </div>
      
    </div>
  
      
    </div>
</template>


<script>
export default {



    data(){
        return {
            question: null,
            answer: null,
            img: null,
            isValidquestion: false,
        }
    },

    methods:{
        async getAnswer(){
            this.answer = 'Pensando... '

            let {answer, image} = await fetch('https://yesno.wtf/api').then( r => r.json())

            if(answer === 'yes'){
                answer = 'Si'
            }
            
            if(answer === 'no'){
                answer = 'No!'
            }

            this.answer = answer
            this.img = image
        }
    },
    
    watch:{ // Son observadores
        question(value, oldValue){ // Se debe de llamar igual al valor que deseamos observar

            this.isValidquestion = false
            
            if(!value.includes('?')){
                return
            }

            this.isValidquestion = true

            //Todo>: realizar peticion http
            this.getAnswer()
        }
    }
}
</script>

<!--? El scoped hace que el css no se  propague a los demas componentes -->
<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    img {
    height: 100vh;
    left: 0;
    object-fit: cover;
    position: fixed;
    top: 0;
    width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }

    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }

    h2 {
        margin-top: 150px;
    }


</style>