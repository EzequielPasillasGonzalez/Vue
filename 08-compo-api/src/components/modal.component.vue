<template>
    <div class="modal-background fade-id" @click.self="$emit('on:close')">
        <!--? .self para que solo funcione cuando se presiona ese elemento y no sus hijos  -->
        <div class="modal-container">
            <!-- <slot/> -->

            <!-- <slot >
                <div class="center">
                    Esto parecera si no tenemos contenido
                </div>                
            </slot> -->

            <slot name="header"></slot> <!-- Con el name se define el orden de acomdo del slot -->

            <hr>
            <slot name="body"></slot>
            <br>
            <slot name="footer"></slot>

            <slot name="exposed" :newTitle="newTitle"  message="holi"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,            
        }
    },
    emits: ['on:close'], //<!--? Para especificar que evento se emite  --->
    setup(props, context) {

        console.log({ props, context });

        const newTitle = props?.title

        console.log(newTitle);

        return {
            newTitle
        }
    }

}
</script>

<style scoped>
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

.modal-container {
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}


.fade-in {
    animation: fadeIn ease-out 0.2s;
    -webkit-animation: fadeIn ease-out 0.2s;
    -moz-animation: fadeIn ease-out 0.2s;
    -o-animation: fadeIn ease-out 0.2s;
    -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-moz-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-o-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-ms-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>