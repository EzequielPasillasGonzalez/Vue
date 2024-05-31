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
            <li @dblclick="toggleToDo(todo.id)" v-for="todo in getToDoByTab" :key="todo.id"
                :class="{ 'completed': todo.completed === true }">
                {{ todo.text }}
            </li>
        </ul>
    </div>



    <!-- Modal -->

    <!-- formulario
    submit.prevent
    createToDo
    -->

    <button @click="openModal">Crear ToDo</button>

    <slotModal v-if="isOpen" @on:close="openModal">

        <template v-slot:header>
            <h2>Crear una nueva tarea</h2>
        </template>

        <template v-slot:body>
            <form @submit.prevent="onSubmit(nameToDo)">
                <input type="text" id="nameToDo" placeholder="Nombre de la tarea" autofocus v-model="nameToDo">
                <br>
                <button>Enviar</button>
            </form>
        </template>



        <template v-slot:footer>
            <button @click="openModal">Cerrar</button>
        </template>
    </slotModal>

</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import useTodos from '@/composable/useTodos'
import useOpenModal from '@/composable/useOpenModal'
import slotModal from '@/components/modal.component.vue'

export default {
    components: {
        slotModal,
    },

    setup() {

        const store = useStore()
        let nameToDo = ref('')

        const { isOpen, openModal } = useOpenModal()
        const { all, completed, currentTab, getToDoByTab, pending, toggleToDo } = useTodos()





        const onSubmit = (nameToDoModal) => {                                    
            const addTodo = computed(() =>            
                store.commit('createToDo', nameToDoModal)
            )
        }

        return {
            all,
            completed,
            currentTab,
            getToDoByTab,
            pending,
            isOpen,
            nameToDo,            

            toggleToDo,
            openModal,
            onSubmit,
            
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