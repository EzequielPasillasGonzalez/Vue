<template>

    <div class="pokemon-container">
    <img :src="imgSrc"
            
            class="hidden-pokemon"
            alt="Pokemon">

    <img    v-if="showPokemon"
            :src="imgSrc"
            class="fade-in"
            alt="Pokemon">            
    </div>    

    
</template>

<script>

// Number, required

export default {

    props:{ //? Se recibe la properti que se envia desde PokemonPage
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon:{
            type: Boolean,
            required: true,
            default: false
        }
        
    },
    data(){
        return {
            idPokemon: this.pokemonId 
        }
    },
    computed:{
        
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`
        }
    }    
}

</script>

<style scoped> /** El scope hace que los estilos no se propagen por todo el programa, solo se queden en este componente */

.pokemon-container {
    height: 200px;
}

img {
    height: 200px;
    position: absolute;
    right: 32%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

.hidden-pokemon{
    filter: brightness(0);
}

</style>