<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">Verificando conexiones</a>
            <button class="btn btn-primary mr-3" type="button" @click="verifyConections()">Verificar</button>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        verifyConections: Function
    }
}
</script>
