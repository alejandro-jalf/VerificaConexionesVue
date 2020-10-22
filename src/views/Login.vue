<template>
    <div class="background">
        <b-card class="mt-5" style="max-width: 500px;">
            <div class="d-flex justify-content-center">
                <b-avatar variant="secundary" size="9rem"></b-avatar>
            </div>
            <b-form-input placeholder="Usuario" class="mb-4"></b-form-input>
            <b-form-input type="password" placeholder="Contraseña" class="mb-4"></b-form-input>
            <b-button block variant="primary">Iniciar sesion</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "Login",

}
</script>

<style scoped>
    .background{
        position: absolute;
        background: rgba(0, 0, 0, 0.63);
        width: 100%;
        height: 100%;
    }
</style>
