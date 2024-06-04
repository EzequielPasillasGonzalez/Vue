<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img    src="@/assets/logo.png" 
                    alt="Vue Logo" 
                    class="d-inline-block align-text-top mx-2"
                    height="24">
            {{ username }}
        </a>

        <div class="d-flex">
            <button class="btn btn-outline-info mx-2" @click="onLogOut">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>

<script>
import useAuth from '@/modules/auth/composable/useAuth'
import { useRouter } from 'vue-router'

export default {

    setup() {
    
        const router = useRouter()
        const { username, logOut } =  useAuth()

        const onLogOut = () => {
            router.push({ name: 'login' })
            logOut()
        }

        console.log(username);
    
        return {
            username, 
            onLogOut
        }
    }
                
}
</script>

<style lang='scss' scoped>

</style>