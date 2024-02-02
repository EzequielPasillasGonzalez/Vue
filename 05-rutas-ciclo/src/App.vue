<template>
  <Navbar/>
  <img alt="Vue logo" src="./assets/logo.png">

  <router-view/>  <!-- Se implementa las rutas del router.js -->
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
  name: 'App',
  components: {    
    // Se utiliza para llamar a los componentes de manera perezosa fuera del router 
    Navbar: defineAsyncComponent( () => import( /* webpackChunkName: "Navbar" */ '@/modules/shared/components/Navbar.vue') ) //? Cargar de manera precezosa ,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
