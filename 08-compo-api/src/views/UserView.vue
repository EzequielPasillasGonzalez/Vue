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
import useUsers from '@/composable/useUsers'


export default {
    setup() {
       
        const { currenPage, errorMessage, isLoading, nextPage, previusPage, users } = useUsers()

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