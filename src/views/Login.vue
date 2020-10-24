<template>
    <div class="background">
        <b-card class="modal-dialog-centered card-login">
            <div class="d-flex justify-content-center">
                <b-avatar icon="person-circle" variant="secundary" size="9rem"></b-avatar>
            </div>
            <b-form-input placeholder="Usuario" class="mb-4" v-model="textUser" ref="user" @keyup.enter="focusPassword"></b-form-input>
            <b-form-input :type="status" placeholder="Contraseña" class="mb-4" v-model="textPassword" ref="password" @keyup.enter="submitData()"></b-form-input>
            <b-button block variant="primary" class="mb-4" @click="submitData()" ref="btnInicia">Iniciar sesion</b-button>
            <b-form-checkbox v-model="status" value="text" unchecked-value="password"> Mostrar contraseña</b-form-checkbox>
        </b-card>
    </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            status: "password",
            textUser: "",
            textPassword: ""
        }
    },
    mounted() {
        this.$refs.user.focus();
    },
    methods: {
        ...mapActions(['initSesion']),
        ...mapMutations(['showAlertDialog']),
        focusPassword() {
            this.$refs.password.focus();
        },
        submitData() {
            if (this.textUser.trim() === "" ) {
                this.showAlertDialog(['Campo usuario vacio']);
                return;
            }
            if (this.textPassword.trim() === "" ) {
                this.showAlertDialog(['Campo contraseña vacio']);
                return;
            }
            this.initSesion([this.textUser, this.textPassword, this.$router])
        }
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
