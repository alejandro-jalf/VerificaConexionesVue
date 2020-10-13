<template>
  <div id="app" class="container">
    <Loading v-if="loading" />
    <ButtonVerify  v-bind:verifyConections="verifyConections"/>
    <CardView v-for="sucursal in conexiones" v-bind:sucursal="sucursal" v-bind:key="sucursal.conexion" />
  </div>
</template>

<script>
import axios from "axios";
import { urlConexion } from "./config/index.js";
import ButtonVerify from "./components/ButtonVerify.vue";
import Loading from "./components/Loading.vue";
import CardView from "./components/CardView.vue";

export default {
  name: 'App',
  components: {
    ButtonVerify,
    Loading,
    CardView,
  },
  data () {
    return {
        conexiones: [],
        loading: false,
        urlConexion,
    }
  },
  mounted: function() {
    // this.verifyConections();
  },
  methods: {
    verifyConections: function() {
      this.startLoading();
      const instancia = this;
      axios.get(instancia.urlConexion)
      .then(function (response) {
        instancia.conexiones = response.data.data;
        instancia.stopLoading();
      })
      .catch(function (error) {
        instancia.stopLoading();
        console.log('Error: ' + error);
      })
    },
    startLoading: function() {
      this.loading = true;
    },
    stopLoading: function() {
      this.loading = false;
    }
  }
}
</script>
