const app = Vue.createApp({
    // template: `
    //     <h1> Hola mundo </h1>
    //     <p> {{ [1,2,3,4,5,6 ] }} </p>
    // `

    data() { //** Son conocidos como opciones */
        return {
            quote: 'I`m batman',
            author: 'Bruce wayne'
        }
    },

    methods: { //** Son conocidos como opciones */
        changeQuote( event  ){  //? Asi como se trae 
            
            this.author = 'Ezequiel Pasillas'

            this.quote = 'Hola mundo'

            this.capitalize() // * Mandar a llamar otra funcion

        },

        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    },

})

app.mount(`#myApp`)

