<template>
  <h1 v-if="authStatus === 'authenticationg'">{{authStatus}}</h1>
  <router-view v-else/>  
</template>


<script>
import useAuth from './modules/auth/composable/useAuth'

export default {
    setup() {
    
      const { authStatus, checkAuthStatus } = useAuth()

      checkAuthStatus()


    
      return {
        authStatus
      }
    }
}
</script>

<style lang='scss' scoped>

</style>
