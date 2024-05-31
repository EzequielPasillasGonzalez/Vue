import { ref } from 'vue'

const openModal = () => {

    let isOpen = ref(false)

    const openModal = () => {            
        isOpen.value = !isOpen.value            
    }
    
    return {
        isOpen,

        openModal,
    }
}

export default openModal