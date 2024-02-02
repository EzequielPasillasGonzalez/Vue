<template>

  <h1 v-if="!pokemon">Espere por favor....</h1>

  <div v-else>
      <h1>¿Quién es este pokémon?</h1>
    
      <!-- todo: Img -->
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/> <!--? Se manda la properti de id al componente  -->    
      
      <!-- Todo: Opciones -->
      <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/> 
      <!--  ? Con el @selection, se escucha el evento que se creo en el componente hijo PokemonOPtions, 
            ? se puede llamar unicamente la erferencia al metodo, con los parentesis se puede mandar los argumentos 
            ? que se reciben, checkAnswer(1, $event) se pueden enviar tambien los que se generen ahi como el 1, y el $event es el que recibe 
            ? y manda a la funcion, tambien se puede dejar sin parentesis para pasar el unico elemento que recibe
      ?-->


      <template v-if="showAnswer"> <!--? Se peude usar div o template, funciona para agrupar cuando se van a usar las directivas -->
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame">Nuevo Juego</button>  
      </template>
      
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {    
    components: {
    PokemonOptions,
    PokemonPicture
  },
  data(){
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray(){
      this.pokemonArr = await getPokemonOptions()
      
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    
    },

    checkAnswer(selectedIdPokemon){      
      this.showPokemon = true
      this.showAnswer = true

      if(selectedIdPokemon === this.pokemon.id){
        this.message = `Correct, ${this.pokemon.name}`
      }else{
        this.message = `False, ${this.pokemon.name}`
      }
    },

    newGame(){
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()      
    }
  },
  mounted(){
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>