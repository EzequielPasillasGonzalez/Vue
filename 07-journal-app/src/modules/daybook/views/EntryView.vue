<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-seccess fs-3 fw-bold">01</span>
            <span class="mx-1 fs-3">Febrero</span>
            <span class="mx-2 fs-4 fw-light">2024</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Qué sucedió hoy?"></textarea>
    </div>

    <Fab
        :icon="icon"
    />

    <img src="https://s1.1zoom.me/b6053/435/Scenery_Sky_Tropics_Coast_Sea_Beach_512353_3840x2160.jpg" 
        alt="Entry picture"
        class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {

    data(){
        return{
            icon: "fa-save"
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/FaBComponent.vue'))
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