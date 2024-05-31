<template>
    <div v-if="isLoading">
        <h2>Espere por favor....</h2>
    </div>

    <div v-else>
        <h2>Usaurios</h2>

    </div>

    <div v-if="errorMessage">
        <h5>{{ errorMessage }}</h5>
    </div>

    <div v-if="users.length > 0">
        <ul>
            <li v-for="{ first_name, last_name, email, id } in users" :key="id">
                <h4>{{first_name}} {{last_name}}</h4>
                <h6>{{email}}</h6>
            </li>
        </ul>
    </div>


    <button @click="previusPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span> Página: {{currenPage}}</span>
</template>

<script>
import { nextTick, ref } from 'vue'
import axios from 'axios'
export default {
    setup() {

        const users        = ref([])
        const isLoading    = ref(true)
        const currenPage   = ref(1)
        const errorMessage = ref()

        const getUsers = async (page = 1) => {
            if (page <= 0) {
                page = 1
            }

            isLoading.value = true

            const { data } = await axios.get('https://reqres.in/api/users', {
                params: {
                    page
                }
            })

            if (data.data.length > 0) {
                users.value = data.data
                currenPage.value = page
                errorMessage.value = null
            } else if (currenPage.value > 0) {
                errorMessage.value = 'No hay mas usuarios'
            }

            isLoading.value = false

        }

        getUsers() //? Se manda a llamar la funcion

        const nextPage = () => {
            getUsers(currenPage.value +1)
        }

        const previusPage = () => {
            getUsers(currenPage.value -1)
        }


        return {
            currenPage,
            errorMessage,
            isLoading,
            users,

            nextPage,
            previusPage,
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 250px;
}
</style>