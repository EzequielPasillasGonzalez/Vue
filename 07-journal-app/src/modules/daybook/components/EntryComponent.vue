<template>
    <div class="entry-container mb-3 ponter p-2"
        @click="$router.push({ name: 'entry', params: ({ id: 10 })})">
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">01</span>
            <span class="mx-1 fs-5">Febrero</span>
            <span class="mx-2 fw-light">2024, jueves</span>
        </div>

        <!-- Descripcion -->
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ullam magnam consequuntur illum sapiente, ducimus voluptatum soluta accusantium, officiis repellat voluptates, animi beatae odit laborum nisi accusamus saepe omnis id.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e58;    
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}
</style>