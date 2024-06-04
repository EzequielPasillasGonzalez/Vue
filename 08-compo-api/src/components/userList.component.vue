<template>
    <!-- <ul>
        <li v-for="user in users" :key="user.id">
            <h5>Holi</h5>
        </li>
    </ul> -->    
    <ul>
        <slot v-for="user in users" :key="user.id" :user="user" > <!--? Manera en que se tratan los datos en el slot  -->                    
        </slot>
    </ul>

</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            requiered: true
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
}
</style>