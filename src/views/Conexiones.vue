<template>
    <div>
        <Conexiones class="mt-2" />
        <FloatButton :click="getConexions"></FloatButton>
    </div>
</template>

<script>
import { mapActions } from "vuex";

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
        ])
    }
}
</script>
