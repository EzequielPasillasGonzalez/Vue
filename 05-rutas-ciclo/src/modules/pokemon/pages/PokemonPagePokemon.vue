<template>
    <h1>
        Pokemon Page 
    </h1>

    <div v-if="pokemon">
        <h1>{{ pokemon.name }}</h1>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
    export default{

        props: {
            id:{ //? Es mejor usarlo asi porque la propiedad del componente se hace requierida para el funcionamiento
                type: Number,
                required : true
            },            
        },

        data(){
            return {
                // No se trabaja de esta manera
                // id: this.$route.params.id

                pokemon: null 
            }
        },

        created(){
            // No se trabaja de esta manera
            // const { id } = this.$route.params
            // console.log(id);
            //this.id = id

            // console.log(this.$attrs);
            this.getPokemon()
        },
        methods: {
            async getPokemon(){
                try{
                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( resp => resp.json())
                    console.log(pokemon);
                    this.pokemon = pokemon
                }catch(e){
                    this.$router.push({name: 'NotFound', params: {message: `Pokemon no encontrado`}}) // Mantiene la historia y lo podemos redireccionar                    
                }
            }
        },
        watch: {
            id(){
                this.getPokemon() // Con esto y la configuracion del navbar, se escuchan los cambios en la url
            }
        }
    }    
</script>