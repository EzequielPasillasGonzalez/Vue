export const increment = (state) => { //? Nombre de la mutacion
    state.count ++ //? Accion a realizar
    state.lastMutation = 'Increment'
}

export const incrementBy = (state, value) => {
    state.count += value
    state.lastMutation = `Increment by ${value}`
}

export const setLoading = (state, value) => {
    state.isLoading = value
    state.lastMutation = `setLoading ${value}`
}