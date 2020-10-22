<template>
    <b-list-group-item class="d-flex align-items-center">
        <b-icon variant="primary" :icon="loadActive(sucursal.success)" class="mr-3" font-scale="2"></b-icon>
        <span class="mr-auto"><strong>{{refactorName(sucursal.conexion)}}</strong></span>
        <b-badge variant="ligth">{{sucursal.message}}</b-badge>
    </b-list-group-item>
</template>

<script>
export default {
    name: "Conexion",
    props: {
        sucursal: Object,
    },
    methods: {
        loadActive(value) {
            return value ? 'toggle-on' : 'toggle-off';
        },
        refactorName(nameSucursal) {
            const name = nameSucursal.split(".")[0].slice(3, nameSucursal.length);
            if (name === "SUPERUNO") return "ZARAGOZA";
            if (name === "CENTRO") return "VICTORIA";
            return name;
        }
    }
}
</script>
