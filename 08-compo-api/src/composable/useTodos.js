import { useStore } from 'vuex'
import { computed, ref } from 'vue'

const useToDos = () => {

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

export default useToDos