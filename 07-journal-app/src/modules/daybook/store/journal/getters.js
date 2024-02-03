// export const myGetter = (state) => {

// }

export const getEntriesByTerm = (state) => ( term = '') => { //? Va a retornar otra funcion de flecha
    //? Que devuelva otra funcion, hace que getEntriesByTerm se convierta en una funcion

    if(term.length === 0){ //? si no hay nada en el temrino regresa todas las entradas
        return state.entries
    }

    //? si encuentra algo, entonces las convierte en minusculas y los busca por el filtro, devuelve los resultados
    return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLowerCase() ) )
}

export const getEntriesById = (state) => ( id = '' ) => {

    const entry = state.entries.find(entry => entry.id === id)

    if(!entry){
        return
    }

    return { ...entry } //Todo: Hacer pruebas
}