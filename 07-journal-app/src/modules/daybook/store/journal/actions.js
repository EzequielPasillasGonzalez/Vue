import journalApi from "@/api/journalApi"

// export const myAction = async ({comit}) => {

// }

export const loadEntries = async ({ commit }) => {

    const { data } = await journalApi.get("/entries.json") //? Le hace un peticion get al api

    const entries = [] //? Se inicializa una lista para guaradar la data de la peticion

    for( let id of Object.keys(data) ){ //? Se va guardando los datos en la lista
        entries.push({
            id, //? Se guardar el id
            ...data[id] //? se guarda el resto de la data 
        })
    }

    commit('setEntries', entries) //? Se llama la mutacion entries para guardar la respuesta de la api desde la bd

}

export const updateEntries = async (/*{ cmomit }*/) => {
    
}

export const createEntries = async (/*{ commit }*/) => {
    
}

export const deleteEntries = async (/*{ commit }*/) => {
    
}