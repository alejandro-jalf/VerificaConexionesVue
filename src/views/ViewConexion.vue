<template>
    <div>
        <Conexiones class="mt-2" />
        <FloatButton :click="getConexions"></FloatButton>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Conexiones from "../components/Conexiones";
import FloatButton from "../components/FloatButton";

export default {
    name: "ViewConexion",
    components: {
        FloatButton,
        Conexiones
    },
    methods: {
        ...mapActions([
        'getConexions'
        ]),
        showAlert: function() {
        this.fail = true;
        },
        hideAlert: function() {
        this.fail =false;
        }
    },
    computed: {
        ...mapState([
        'conexiones'
        ])
    }
}
</script>
