import store from '@/store'

const isAuthenticated = async (to, from, next) => {

    console.log(to, from, next);

    const { ok } = await store.dispatch('auth/checkAuthtentication')

    if(ok){
        next()
    }else{
        next({name: 'login'})
    }

    
}

export default isAuthenticated