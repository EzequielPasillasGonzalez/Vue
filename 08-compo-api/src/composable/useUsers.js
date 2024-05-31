import axios from "axios"
import { ref } from "vue"

const useUsers = () => {
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

    getUsers()

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

export default useUsers