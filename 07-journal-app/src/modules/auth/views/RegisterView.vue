<template>
    <span class="login100-form-title p-b-41">
        Register
    </span>
    <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="onSubmit">

        <div class="wrap-input100 validate-input" data-validate="Enter name">
            <input class="input100" type="text" placeholder="Nombre" required v-model="userForm.name">
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate="Enter username">
            <input class="input100" type="text" placeholder="Correo" required v-model="userForm.email">
            <span class="focus-input100" data-placeholder="&#xe818;"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate="Enter password">
            <input class="input100" type="password" placeholder="Contraseña" required v-model="userForm.password">
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button type="submit" class="login100-form-btn">
                Create Account
            </button>

        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'login' }">¿Ya tienes una cuenta?</router-link>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

import useAuth from '@/modules/auth/composable/useAuth'




export default {

    setup() {

        const router = useRouter()
    
        const userForm = ref({
            email: 'correo@correo.com',
            password: '123456',
            name: 'Ezequiel'
        })


        const { createUser } = useAuth()

        const onSubmit = async () => {            
            const { ok, message } = await createUser(userForm.value)

            if(!ok){
                return Swal.fire('Error', message, 'error')
            }

            router.push({ name: 'no-entry' })
        }
    
        return {
            //Var
            userForm,

            //Methods
            onSubmit,
                        
        }
    }
}
</script>

<style lang='scss' scoped></style>