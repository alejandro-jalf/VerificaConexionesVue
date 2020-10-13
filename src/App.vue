<template>
  <div id="app" class="container">
    <Loading v-if="loading" />
    <ButtonVerify  v-bind:verifyConections="verifyConections"/>
    <Alert v-if="fail" />
    <CardView v-for="sucursal in conexiones" v-bind:sucursal="sucursal" v-bind:key="sucursal.conexion" />
  </div>
</template>

<script>
import axios from "axios";
import { urlConexion } from "./config/index.js";
import ButtonVerify from "./components/ButtonVerify.vue";
import Loading from "./components/Loading.vue";
import CardView from "./components/CardView.vue";
import Alert from "./components/Alert";

export default {
  name: 'App',
  components: {
    ButtonVerify,
    Loading,
    CardView,
    Alert,
  },
  data () {
    return {
      conexiones: [],
      loading: false,
      urlConexion,
      fail: false,
    }
  },
  mounted: function() {
    this.verifyConections();
  },
  methods: {
    verifyConections: function() {
      this.startLoading();
      this.hideAlert();
      const instancia = this;
      axios.get(instancia.urlConexion)
      .then(function (response) {
        instancia.conexiones = response.data.data;
        instancia.stopLoading();
      })
      .catch(function (error) {
        instancia.conexiones = [];
        instancia.stopLoading();
        instancia.showAlert();
        console.log('Error: ' + error);
      })
    },
    startLoading: function() {
      this.loading = true;
    },
    stopLoading: function() {
      this.loading = false;
    },
    showAlert: function() {
      this.fail = true;
    },
    hideAlert: function() {
      this.fail =false;
    }
  }
}
</script>
