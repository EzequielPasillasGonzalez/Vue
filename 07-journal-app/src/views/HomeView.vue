<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola mundo</h1>

    <button @click="gotToDayBook" class="btn btn-primary">Primary</button>
    <button @click="gotToDayBook" class="btn btn-secondary">Secondary</button>
    <button @click="gotToDayBook" class="btn btn-success">Success</button>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
    gotToDayBook(){
      this.$router.push({name: 'no-entry'}) //? Igual de como esta en el router que se exporta del modules
    }
  }
}
</script>
