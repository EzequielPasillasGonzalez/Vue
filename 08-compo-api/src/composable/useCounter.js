import { ref } from "vue"

const useCounter = ( initValue = 5 ) => {
    const counter = ref(initValue) 

        // const increase = () => { 
        //     counter.value += 1 
        // }

        const decrease = () => { 
            counter.value -= 1 
        }

        return { 
            // Objetos
            counter,

            // Metodos
            increase: () => counter.value++, 
            decrease,
        }
}

export default useCounter