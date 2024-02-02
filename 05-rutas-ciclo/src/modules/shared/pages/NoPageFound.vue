<template>
    <h1>No Page Found</h1>
    <h3>404</h3>
    {{ message }}
    <!-- <div v-if="$route.params.message">    
        <h3>{{ $route.params.message }}</h3>
    </div> -->
</template>

<script>
export default {
    props:{
        message: {
            type: String
        }
    },
}
</script>