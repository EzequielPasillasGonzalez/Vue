<template>
    <div>
    <h1>Aprendiendo Slots</h1>
    <button @click="openModal">Abrir Modal</button>
    </div>

    <modal v-if="isOpen" @on:close="openModal" title="Hola Mundo" otherTitle="Hola sd"> 
        <!-- <h2>Titulo del modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum</p>
        <button>Cerrar</button> -->

        
        <template v-slot:header>   <!--? Con le v-slot se especifica a cual slot se manda esa informacion  -->
            <h2>Titulo del modal</h2>
        </template>

        <template v-slot:footer>            
            <button @click="openModal">Cerrar</button>
        </template>

        <template v-slot:body>            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum</p>
        </template>


        <template v-slot:exposed="slotProps">            
            <h2>{{slotProps}}</h2>
        </template>

    </modal>
</template>

<script>
import Modal from '@/components/modal.component.vue'
import { ref } from 'vue'
export default {
    components: {
        Modal,
    },

    setup() {
    
        let isOpen = ref(false)

        const openModal = () => {            
            isOpen.value = !isOpen.value            
        }
    
        return {
    
            isOpen,

            openModal,

        }
    }
}
</script>

<style lang='scss' scoped>
                    
</style>