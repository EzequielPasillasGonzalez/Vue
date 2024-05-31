<template>
    <h1>Lista de tareas de Thanos</h1>

    <!-- <h4>Pendientes: {{ $store.state.toDo.filter( t => !t.completed).length }}</h4> -->
    <h4>Pendientes: {{ pending.length }}</h4>

    <hr>

    <button @click="currentTab = 'all'" :class="{ 'active': currentTab === 'all' }">Todos</button>
    <button @click="currentTab = 'pending'" :class="{ 'active': currentTab === 'pending' }">Pendientes</button>
    <button @click="currentTab = 'completed'" :class="{ 'active': currentTab === 'completed' }">Completados</button>

    <div>
        <ul>
            <li @dblclick="toggleToDo(todo.id)" v-for="todo in getToDoByTab" :key="todo.id" :class="{ 'completed': todo.completed === true }">
                {{ todo.text }}
            </li>
        </ul>
    </div>

</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {


    setup() {

        const store = useStore()
        const currentTab = ref('all')

        const pending = computed(() =>  //? Se hace computada
            store.getters['pedingToDos'] //? se obtiene el objeto llamadado pedingtoDos
        )

        const all = computed(() =>  //? Se hace computada
            store.getters['allToDos'] //? se obtiene el objeto llamadado pedingtoDos
        )

        const completed = computed(() =>  //? Se hace computada
            store.getters['completedToDos'] //? se obtiene el objeto llamadado pedingtoDos
        )

        const getToDoByTab = computed(() => 
            store.getters['getTodoByTab'](currentTab.value) //? Se manda un valor a la funcion del getter
        )

        const toggleToDo = (id) => {                        
            store.commit('toggleToDo', id)       
        }

        return {
            all,
            completed,
            currentTab,
            getToDoByTab,
            pending,

            toggleToDo,
        }
    }

}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 300px;
    text-align: left;
}

li {
    cursor: pointer;
}

.active {
    background-color: #1c3e50;
    color: white;
}

.completed {
    text-decoration: line-through;
}
</style>