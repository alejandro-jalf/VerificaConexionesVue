<template>
    <div class="background">
        <b-card class="modal-dialog-centered card-login">
            <div class="d-flex justify-content-center">
                <b-avatar icon="person-circle" variant="secundary" size="9rem"></b-avatar>
            </div>
            <b-form-input placeholder="Usuario" class="mb-4" v-model="textUser"></b-form-input>
            <b-form-input :type="status" placeholder="Contraseña" class="mb-4" v-model="textPassword"></b-form-input>
            <b-button block variant="primary" class="mb-4" @click="initSesion([textUser,textPassword, $router])">Iniciar sesion</b-button>
            <b-form-checkbox v-model="status" value="text" unchecked-value="password"> Mostrar contraseña</b-form-checkbox>
        </b-card>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            status: "password",
            textUser: "",
            textPassword: ""
        }
    },
    methods: {
        ...mapActions([
            'initSesion'
        ])
    }
}
</script>

<style scoped>
    .background{
        position: absolute;
        background: rgba(0, 0, 0, 0.63);
        width: 100%;
        height: 100%;
        padding-top: 5%;
    }
    .card-login{
        max-width: 500px;
        margin: auto;
    }
</style>
