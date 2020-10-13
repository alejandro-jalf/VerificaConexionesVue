<template>
  <div id="app">
    <div v-if="loading" id="loading">
            <img src="./src/spinner.gif" alt="">
        </div>
        <div v-for="sucursal in conexiones" v-bind:key="sucursal.conexion" class="card mt-3 container-gen" style=" box-shadow: 2px 2px 2px #e6e6e6;">
            <div class="row no-gutters">
                <div class="col-md-2 text-center p-2" id="container-image">
                    <img v-bind:src="loadImage(sucursal.success)" class="card-img mt-1 img-barcode" alt="" style="max-width: 150px;">
                </div>
                <div class="col-md-8" id="container-data">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{{namesSucursales[sucursal.conexion]}}</h5>
                        <p class="card-text"><span class="font-weight-bold">Estado de la conexion:</span> {{sucursal.message}}</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
        conexiones: [],
        loading: false,
    }
  },
  mounted: function() {
    this.verifyConections();
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
      loadImage: function (success) {
        const ruta = success ? "./src/success.png" : "./src/warning.jpg";
        return ruta;
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
