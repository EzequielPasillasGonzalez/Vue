//? Las acciones no pueden cambiar una ccion

import getRandomInt from "@/helpers/getRandomInt"

//? Se deben de cambiar mediante una mutacion
export const incrementRandomInt = async ( { commit } ) => {             

    commit('setLoading', true)

    const randomInt = await getRandomInt()

    commit('setLoading', false)

    commit('incrementBy', randomInt)
                    
}