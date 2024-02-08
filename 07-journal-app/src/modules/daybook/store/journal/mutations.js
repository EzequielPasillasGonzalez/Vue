// export const myMutations = (state) => {

// }

export const setEntries = (state, entries) => {

    state.entries = [ //? Para crear un nuevo arreglo con juntando los valores anteiorres y los nuevos valores
        ...state.entries, //? se desestructura el state
        ...entries //? Y tambien el entries  
    ]

    state.isLoading = false //? Se marca que ya se termino de cargar la informacion

}

export const updateEntries = (state, entry) => { // Recibir la entrada actualizada


    // state.entries => es un arreglo, buscar la entrada con el mismo ID
    const idx = state.entries.map( e => e.id).indexOf(entry.id) //? Se crea un unevo arreglo con todos los ID del state
    
    // state.entries => ...entry
    state.entries[idx] = entry //? se asigna el valor nuevo
    

}

export const addEntries = (state, entry) => {

    // state ==> entries => la nueva entrada debe de ser la primera,
    state.entries = [entry, ...state.entries] //? Se agrega la nueva entrada al principio
    

}

export const deleteEntries = (state, id) => {

    // remover del state.entries => el que coincida con el id
    const indice = state.entries.findIndex( obj => obj.id === id)

    if (indice !== -1) {
        state.entries.splice(indice, 1)
    }
    

}