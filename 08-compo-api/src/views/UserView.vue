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
        <user-List-ComponentVue :users="users" v-slot="{ user }"> <!--? Template de como queremos que se muestre en el slot -->
            <h5>{{user.first_name}} {{user.last_name}}</h5>  <!--? Datos a mostrar en el slot  -->            
            <span>{{user.email}}</span>
        </user-List-ComponentVue>        
    </div>


    <button @click="previusPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span> Página: {{currenPage}}</span>
</template>

<script>
import useUsers from '@/composable/useUsers'
import userListComponentVue from '@/components/userList.component.vue'


export default {
    components: {
        userListComponentVue
    },
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