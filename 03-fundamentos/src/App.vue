<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <!--? titulo: Son propertis que se envian -->    
  <!-- <Counter  :start="101" titulo="Contador"/>  -->
  <!--? Con el : se abrevia el v-bind y se envia el valor, o tambien puede mandarse la prop solo con el nombre  -->

  <IndecisionVue/> <!--? asi se utilizan los componentes -->


</template>

<script>
import Counter from './components/Counter.vue';
import IndecisionVue from './components/Indecision.vue';

export default {
    name: 'App',
    components: { 
      //Counter 
      IndecisionVue
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
