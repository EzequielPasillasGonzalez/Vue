import state from './state'
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const counterStore = {
    //Todo: 
    namespaced: true,

    state,

    mutations, //? Las mutation son similares a los methods

    actions,

    getters,
}

export default counterStore;