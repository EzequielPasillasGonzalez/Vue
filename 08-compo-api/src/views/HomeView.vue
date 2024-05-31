<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Reactive vs Ref</h1>

    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <h3>{{ ironIsAlive }}</h3>
    <h3>{{ hulkIsAlive }}</h3>
  </div>

  <div>
    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    <button @click="changeStatus">Cambiar Estatus</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  
  setup() {
    const ironman = ref({ name: 'Tony', age: 50 }) //? Ref funciona con todo
    const hulk = reactive({ name: 'Bruce', age: 50 }) //? Reactive solo funciona con objetos
    
    const ironIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {      
      hulkIsAlive.value = !hulkIsAlive.value      
    }


    const changeIronman = () => {
      ironman.value.name = 'Tony Stark'
      ironman.value.age = 55
    }

    const changeHulk = () => {
      hulk.name = 'Bruce Baner'
      hulk.age = 53
    }

    return {
      //Objetos
      ironman,
      hulk,
      hulkIsAlive,
      ironIsAlive,


      //Funciones      
      changeIronman,
      changeHulk,
      changeStatus
    }
  }
}
</script>
