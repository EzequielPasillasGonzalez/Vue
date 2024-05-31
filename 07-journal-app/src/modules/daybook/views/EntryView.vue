<template>
    <template v-if="entry"> <!--? El template no modifica el html y sirve como un agrupador-->
        
        <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-seccess fs-3 fw-bold">{{ day }}</span>
            <span class="mx-1 fs-3">{{ month }}</span>
            <span class="mx-2 fs-4 fw-light">{{ year }}</span>
        </div>

        <div>
                                <!--? Es para escuchar los cambios en el input -->
            <input type="file" @change="onSelectdImage"
                    ref="imageSelector"
                    v-show="false"
                    accept="image/png, image/jpeg">
                    <!--? La referncia es para que un boton haga el mismo trabajo que este, puede que queramos un boton personalizado -->
                    

            <button class="btn btn-danger mx-2"
            v-if="entry.id"
                @click="onDeleteEntry">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary"
                @click="onPressImage"> <!--? Esta funcion llama a la referencia del boton de arriba para seleccionar imagenes -->
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>    

    
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Qué sucedió hoy?" 
                    v-model="entry.text"></textarea>
    </div>

    <Fab
        icon="fa-save"
        @on:click="saveEntry" 
    /> <!--? Asi se recibe un evento del FaBComponent -->

    <img v-if="entry.picture && !localImage "
        :src="entry.picture" 
        alt="Entry picture"
        class="img-thumbnail">
    
    <img
        v-if="localImage"
        :src="localImage" 
        alt="Entry picture"
        class="img-thumbnail">
    
    </template>
    
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2'

import getDayMonthYear from '../helpers/getDayMonthYear'
import uploadImage from '../helpers/uploadImage'

export default {
    name: 'EntryView',
    props:{
        id:{
            type: String,
            required: true
        }
    }, 
    data(){
        return{
            // icon: "fa-save",
            entry: '',
            localImage: null,
            file: null,
        }
    },
    computed:{
        ...mapGetters('journal', [
            'getEntriesById'
        ]),
        day(){
            const { day } = getDayMonthYear(this.entry.date)
            return day                
        },
        month(){
            const { month } = getDayMonthYear(this.entry.date)
            return month                
        },
        year(){
            const { year } = getDayMonthYear(this.entry.date)
            return year                
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/FaBComponent.vue'))
    },
    methods:{
        ...mapActions( 'journal', [
                'updateEntries',
                'createEntries',
                'deleteEntries'
        ]),
        loadEntry(){


            let entry;

            if(this.id == 'new'){
                entry = {
                    text: '',
                    date: new Date().getTime(),                    
                }
            } else {
                entry = this.getEntriesById(this.id)   
                if(!entry){
                    return this.$router.push({name:'no-entry'})
                }
                
            }


            this.entry = entry
        },
        async saveEntry(){

            new Swal({ //? Mostrar alertas
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()

            const picture = await uploadImage(this.file) //? subir foto al back, base de datos

            this.entry.picture = picture

            if(this.entry.id){
                
                // Disparar la accion del journal app
                await this.updateEntries(this.entry)
            } else {
                // Crear una nueva entrada
                // action createEntry
                const resp = await this.createEntries(this.entry)
                                
                // redigirir al usuario de la url con el param de id
                this.$router.push({ name: 'entry', params: { id: resp } })
            }        
            
            this.localImage = null //? Para que no se encimen las imagenes

            Swal.fire('Guardado', 'Entrada registrada con éxito', 'success')

            
        },
        async onDeleteEntry(){            
            

            const { isConfirmed } = await Swal.fire({
                title: '¿Estás seguro?',
                text: 'Una vez borrado, no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si estoy seguro'
            })

            if (isConfirmed) {
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                
                const { id } = this.entry
                const { data } = await this.deleteEntries(id)    
                
                if(!data){
                    // redireccionar al usuario fuera
                    this.$router.push({name:'no-entry'})

                    Swal.fire('Eliminado', '', 'success')
                }
            }
        },

        onSelectdImage($event){
            const file = $event.target.files[0]
            
            if (!file){

                this.localImage = null
                this.file = null
                return
            }

            this.file = file

            const fr = new FileReader()

            fr.onload = () => this.localImage = fr.result //? Establece la imagen en el local
            fr.readAsDataURL(file)            


        },

        onPressImage(){
            this.$refs.imageSelector.click() //? Se busca una referencia para lanzar la seleccion de archivos
        }
    },
    created(){
        //? Conectarse al getter del diario que esta en el store        
        this.loadEntry()      
    },
    watch:{
        id(){ //? Actualiza el view cuando el usuario pulsa otro entry
            this.loadEntry()
        }
    }
}
</script>

<style scoped lang="scss">
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>