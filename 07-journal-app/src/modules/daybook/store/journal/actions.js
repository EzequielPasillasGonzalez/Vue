import journalApi from "@/api/journalApi"

// export const myAction = async ({comit}) => {

// }

export const loadEntries = async ({ commit }) => {

    const { data } = await journalApi.get("/entries.json") //? Le hace un peticion get al api

    if (!data) {
        commit('setEntries', []) 
    }

    const entries = [] //? Se inicializa una lista para guaradar la data de la peticion

    for( let id of Object.keys(data) ){ //? Se va guardando los datos en la lista
        entries.push({
            id, //? Se guardar el id
            ...data[id] //? se guarda el resto de la data 
        })
    }

    commit('setEntries', entries) //? Se llama la mutacion entries para guardar la respuesta de la api desde la bd

}

export const updateEntries = async ({ commit }, entry) => { // entry debde de ser un parametro
    // Extraer solo lo que necesitamos // id
    const { id, date, text, picture   } = entry   
    const dataToSave = { date, text, picture } 

    // peticion http del await del journal.Api.put(PATH .json data-to-save)
    const resp = await journalApi.put(`/entries/${id}.json`, dataToSave)

    // hacer el commit del una mutacion = updateEntry
    commit('updateEntries', {...entry}) //? Se separa para que no se pase por referencia
}

export const createEntries = async ({ commit }, entry) => { // REcibir el entry
    
    // dataToSave
    const { id, date, text, picture } = entry
    let dataToSave = { date, text, picture }

    // peticion http del await del journal.Api.post(PATH .json data-to-save)
    const resp = await journalApi.post(`/entries.json`, dataToSave)

    // extraer Id
    const { data } = resp
    const idEntry = data.name

    dataToSave.id = idEntry

    

    // commit => addEntry

    commit('addEntries', {...dataToSave})

    return idEntry

}

export const deleteEntries = async ({ commit }, id) => {
    

    try {
        // await jpurnalApi.delete(path)
        const resp = await journalApi.delete(`/entries/${id}.json`)
        
        // commit deleteentry
        commit('deleteEntries', id)

        return resp
    } catch (error) {
        return error
    }
    
    

    
}