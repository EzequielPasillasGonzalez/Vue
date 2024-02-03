// export const myMutations = (state) => {

// }

export const setEntries = (state, entries) => {

    state.entries = [ //? Para crear un nuevo arreglo con juntando los valores anteiorres y los nuevos valores
        ...state.entries, //? se desestructura el state
        ...entries //? Y tambien el entries  
    ]

    state.isLoading = false //? Se marca que ya se termino de cargar la informacion

}

export const updateEntries = (/*state*/) => {

}

export const saddEntries = (/*state*/) => {

}