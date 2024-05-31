import { v4 as uuidv4} from 'uuid'
import { createStore } from 'vuex'

export default createStore({
  state: {
    toDo: [
      { id: '1', text: 'Recolectar las piedras del infinito', completed: false },
      { id: '2', text: 'Piedra del alma', completed: true },
      { id: '3', text: 'Piedra de poder', completed: true },
      { id: '4', text: 'Piedra de realidad', completed: false },
      { id: '5', text: 'Conseguir nuevos secuaces', completed: false },
    ]
  },
  getters: {
  },
  mutations: {
    toggleToDo(state, id) {
      const index = state.toDo.findIndex(task => task.id === id)
      state.toDo[index].completed = !state.toDo[index].completed
    },
    createToDo(state, text = '') {
      console.log('text');
      if (text.length <= 1) {
        return false
      }

      state.toDo.push({
        id: uuidv4,
        completed: false,
        text
      })
      
    }
  },
  actions: {
  },
  getters: {
    pedingToDos(state, getters, rootState) {
      return state.toDo.filter(todo => !todo.completed)
    },
    allToDos: (state, getters, rootState) => {
      console.log({ state, getters, rootState });
      return state.toDo
    },
    completedToDos: (state, getters, rootState) => {
      return state.toDo.filter(todo => todo.completed)
    },
    getTodoByTab: (_, getters) => (tab) => { //? () => regresa una segunda funcion

      switch (tab) {
        case 'all':
          return getters.allToDos
        case 'pending':
          return getters.pedingToDos
        case 'completed':
          return getters.completedToDos
      }

    }
  },
  modules: {
  }
})
