import { computed } from "vue"
import { useStore } from "vuex"

const useAuth = () => {

    const store = useStore()

    const createUser = async (user) => {


        //ToDo: store.dispatch
        const resp = await store.dispatch('auth/createUser', user)

        return resp
    }

    const loginUser = async (user) => {


        //ToDo: store.dispatch
        const resp = await store.dispatch('auth/signInUser', user)

        return resp
    }

    const checkAuthStatus = async () => {
        const resp = await store.dispatch('auth/checkAuthtentication')
        return resp
    }

    const logOut = () => {
        store.commit('auth/logOutUser')   
        store.commit('journal/clearEntries')        
    }

    const authStatus = computed(() =>  //? Se hace computada
            store.getters['auth/currentState'] //? se obtiene el objeto llamadado pedingtoDos
    )

    const username = computed(() =>  //? Se hace computada
            store.getters['auth/username'] //? se obtiene el objeto llamadado pedingtoDos
    )

    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logOut,

        username,
        authStatus,
    }
}



export default useAuth