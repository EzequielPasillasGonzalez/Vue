<template>
    
    <div>
        <!-- <router-link :to="{name: 'home'}">Pokemon List</router-link> -->
        <!-- <router-link :to="{name: 'pokemon-id', params: {id: 1} }">Pokemon by Id</router-link> Con esto y la configuracion del watch se escuchan los cambios en la url          -->
        <!-- <router-link :to="{name: 'about'}">About</router-link> -->

        <custom-link
            v-for="link in links" :key="link.to"
            :link="link"
        />
    </div>
    
</template>


<script>
import { defineAsyncComponent } from 'vue'

export default {
    data(){
        return {
            links: [
                {to:'pokemon-home', name:'Pokemons'},
                {to:'pokemon-id', name:'Pokemon-id', id: 151},
                {to:'pokemon-about', name:'Pokemon-about'},

                {to:'dbz-characters', name:'DBZ - Personajes'},
                {to:'dbz-about', name:'DBZ - About'},

                {to:'https://google.com/', name:'Google'},                
            ]
        }
    },
    components: {
            CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

<style scoped>

div{
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin:  0 10px;
}

div .router-link-exact-active {
    color: #42b983;
}

</style>