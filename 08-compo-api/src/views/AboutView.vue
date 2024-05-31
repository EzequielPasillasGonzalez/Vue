<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>{{ title }}</h2>
  </div>

  <div>
    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>


<script>
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onUnmounted, onUpdated, ref } from 'vue';


export default {
  setup() {

    const title = ref('About page')

    console.log('setup se llamo');

    onBeforeMount(() => {
      console.log('beforeMount');
    })
      

    onMounted(() => {
      console.log('onMounted');
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    })

    onUpdated(() => {
      console.log('onUpdated');
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    })

    onUnmounted(() => {
      console.log('onUnmounted');
    })

    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    })

    onRenderTracked(() => {
      console.log('onRenderTracked');
    })

    onRenderTracked(() => {
      console.log('onRenderTracked');
    })

    onActivated(() => {
      console.log('onActivated');
    })

    onDeactivated(() => {
      console.log('onDeactivated');
    })

    const changeTitle = () => {
      title.value = 'Titulo cambiado'
    }

    return {
      title,

      changeTitle
    }

  }
}
</script>

<style lang='scss' scoped>

</style>