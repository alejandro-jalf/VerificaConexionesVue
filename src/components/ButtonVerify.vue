<template>
    <div class="m-2">
        <button class="btn btn-primary mr-3" type="button" @click="verifyConections()">Verificar</button>
    </div>
</template>

<script>
export default {
    name: "ButtonVerify",
    props: {
        verifyConections: Function
    }
}
</script>