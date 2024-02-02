const isAuthenticatedGuard = (to, from, next) => {
    //console.log({to, from, next});

    return new Promise( (reolve, reject) => {
        const random = Math.random() * 100
        
        if(random > 50){
            console.log('Esta autenticado');
            next()
        }else{
            console.log('Es bloqueado por isAuthenticatedGuard', random);
            next({name: 'pokemon-home'})
        }
    })

    
}

export default isAuthenticatedGuard;