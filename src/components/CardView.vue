<template>
    <div class="card mt-3 container-gen" style=" box-shadow: 2px 2px 2px #e6e6e6;">
        <div class="row no-gutters">
            <div class="col-md-2 text-center p-2" id="container-image">
                <img :src="success" class="card-img mt-1 img-barcode" alt="" style="max-width: 150px;">
            </div>
            <div class="col-md-8" id="container-data">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">{{namesSucursales[`${sucursal.conexion}`]}}</h5>
                    <p class="card-text"><span class="font-weight-bold">Estado de la conexion:</span> {{sucursal.message}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { namesSucursales } from "../config/index";
import success from "../assets/success.png";
import warning from "../assets/warning.jpg";

export default {
    name: "CardView",
    data () {
        return {
            namesSucursales,
            success,
            warning,
        }
    },
    props: {
        sucursal: Object
    },
    methods: {
        loadImage: function (successReceived) {
            const ruta = successReceived ? success : warning;
            return ruta;
        },
    }
}
</script>
